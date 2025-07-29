import React from 'react';
import AirConditionerDetail from './components/air-conditioner/AirConditionerDetail';
import RefrigeratorDetail from './components/refrigerator/RefrigeratorDetail';
// import SmartTVDetail from './components/SmartTVDetail';
import CeilingLightDetail from './components/ceiling-light/CeilingLightDetail';
import WaterHeaterDetail from './components/water-heater/WaterHeaterDetail';
import { Info } from 'lucide-react';

export default function DeviceDetail({ device }) {
  // Xác định component tương ứng với từng loại thiết bị
  const renderDeviceComponent = () => {
    switch (device.type) {
      case 'air_conditioner':
        return <AirConditionerDetail device={device} />;
      case 'refrigerator':
        return <RefrigeratorDetail device={device} />;
      // case 'smart_tv':
      //   return <SmartTVDetail device={device} />;
      case 'light':
        return <CeilingLightDetail device={device} />;
      case 'water_heater':
        return <WaterHeaterDetail device={device} />;
      default:
        return (
          <div className="text-center text-gray-500 py-8">
            Không hỗ trợ hiển thị cho thiết bị loại: <strong>{device.type}</strong>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full p-4">
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="mb-4 p-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl shadow">
          <span className="text-white text-lg font-semibold flex items-center gap-2">
            <Info className="w-5 h-5 text-white" />
            Chi tiết thiết bị
          </span>
        </div>
        {renderDeviceComponent()}
      </div>
    </div>
  );
}
