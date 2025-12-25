import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

// Helper component to update map view when geoData changes
const MapEffect = ({ geoData }) => {
    const map = useMap();

    useEffect(() => {
        if (geoData) {
            const layer = L.geoJSON(geoData);
            const bounds = layer.getBounds();
            if (bounds.isValid()) {
                map.fitBounds(bounds);
            }
        }
    }, [geoData, map]);

    return null;
};

const MapDisplay = ({ activeState, onHover }) => {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        const fetchGeoJSON = async () => {
            let url = 'http://localhost:5001/api/map/india';
            if (activeState) {
                url = `http://localhost:5001/api/map/state/${activeState.slug}`;
            }

            try {
                const response = await axios.get(url);
                setGeoData(response.data);
            } catch (error) {
                console.error("Error fetching GeoJSON:", error);
            }
        };

        fetchGeoJSON();
    }, [activeState]);

    // Explicit color mapping using SLUGS
    const stateColors = {
        'andaman-and-nicobar-islands': '#0ea5e9', 'andhra-pradesh': '#ef4444', 'arunachal-pradesh': '#f97316',
        'assam': '#84cc16', 'bihar': '#eab308', 'chandigarh': '#14b8a6', 'chhattisgarh': '#f59e0b',
        'delhi': '#6366f1', 'dnh-and-dd': '#ec4899', 'goa': '#06b6d4', 'gujarat': '#f43f5e',
        'haryana': '#8b5cf6', 'himachal-pradesh': '#10b981', 'jammu-and-kashmir': '#3b82f6',
        'jharkhand': '#d946ef', 'karnataka': '#a855f7', 'kerala': '#14b8a6', 'ladakh': '#64748b',
        'lakshadweep': '#0ea5e9', 'madhya-pradesh': '#f59e0b', 'maharashtra': '#f97316',
        'manipur': '#ec4899', 'meghalaya': '#22c55e', 'mizoram': '#eab308', 'nagaland': '#ef4444',
        'odisha': '#06b6d4', 'puducherry': '#6366f1', 'punjab': '#84cc16', 'rajasthan': '#eab308',
        'sikkim': '#14b8a6', 'tamil-nadu': '#f43f5e', 'telangana': '#8b5cf6', 'tripura': '#d946ef',
        'uttar-pradesh': '#a855f7', 'uttarakhand': '#10b981', 'west-bengal': '#f43f5e'
    };

    const getSlug = (name) => {
        if (!name) return '';
        // Special case for DNH and DD
        if (name.includes("Dadra") && name.includes("Nagar")) return 'dnh-and-dd';
        return name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');
    };

    const getColor = (slug) => {
        return stateColors[slug] || '#3b82f6';
    };

    const style = (feature) => {
        const name = feature.properties?.st_nm || feature.properties?.name;
        const slug = getSlug(name);
        return {
            fillColor: getColor(slug),
            weight: 1,
            opacity: 1,
            color: '#111827',
            dashArray: '',
            fillOpacity: 0.9
        };
    };

    const onEachFeature = (feature, layer) => {
        const name = feature.properties?.st_nm || feature.properties?.name;

        if (name) {
            layer.bindTooltip(name, {
                permanent: false,
                direction: 'center',
                className: 'bg-transparent border-0 text-gray-100 font-bold text-xs shadow-none drop-shadow-md'
            });
        }

        layer.on({
            mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                    weight: 3,
                    color: '#FFF',
                    fillOpacity: 1,
                });
                layer.bringToFront();
                if (onHover) {
                    onHover({
                        name: name,
                        slug: getSlug(name)
                    });
                }
            },
            mouseout: (e) => {
                const layer = e.target;
                // Reset using the specialized style function
                layer.setStyle(style(feature));
                if (onHover) onHover(null);
            }
        });
    };

    // Key forces remount when state changes to clean up old GeoJSON layers properly
    const mapKey = activeState ? activeState.slug : 'india';

    return (
        <div className="flex-1 h-full z-0 relative bg-gray-900">
            <MapContainer
                center={[22.5937, 82.9629]}
                zoom={5}
                style={{ height: '100%', width: '100%', background: 'transparent' }}
                className="bg-transparent"
                zoomControl={false}
                doubleClickZoom={false}
                scrollWheelZoom={true}
                dragging={true}
            >
                {geoData && (
                    <GeoJSON
                        key={mapKey}
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                )}
                <MapEffect geoData={geoData} />
            </MapContainer>
        </div>
    );
};

export default MapDisplay;
