import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain} from '@fortawesome/free-solid-svg-icons';

export default function TablaClimaSemana() {
    return(<>
    <div className="flex justify-center">
        <table className="rounded bg-black bg-opacity-25 border-gray-200">
            <thead className="">
                <tr>
                    <th className="p-3 text-sm font-semibold text-white tracking-wide text-left">Hoy</th>
                    <th className="p-3 text-sm font-semibold text-white tracking-wide text-left">Mañana</th>
                    <th className="p-3 text-sm font-semibold text-white tracking-wide text-left">Viernes</th>
                    <th className="p-3 text-sm font-semibold text-white tracking-wide text-left">Sabado</th>
                    <th className="p-3 text-sm font-semibold text-white tracking-wide text-left">Domingo</th>
                    <th className="p-3 text-sm font-semibold text-white tracking-wide text-left">Lunes</th>
                    <th className="p-3 text-sm font-semibold text-white tracking-wide text-left">Martes</th>
                </tr>
                <tr>
                    <td className="p-3 text-white text-2xl"><FontAwesomeIcon icon={faCloudRain} /></td>
                    <td className="p-3 text-white text-2xl"><FontAwesomeIcon icon={faCloudRain} /></td>
                    <td className="p-3 text-white text-2xl"><FontAwesomeIcon icon={faCloudRain} /></td>
                    <td className="p-3 text-white text-2xl"><FontAwesomeIcon icon={faCloudRain} /></td>
                    <td className="p-3 text-white text-2xl"><FontAwesomeIcon icon={faCloudRain} /></td>
                    <td className="p-3 text-white text-2xl"><FontAwesomeIcon icon={faCloudRain} /></td>
                    <td className="p-3 text-white text-2xl"><FontAwesomeIcon icon={faCloudRain} /></td>
                </tr>
                <tr>
                    <td className="p-3 text-yellow-50">17°c</td>
                    <td className="p-3 text-yellow-50">17°c</td>
                    <td className="p-3 text-yellow-50">17°c</td>
                    <td className="p-3 text-yellow-50">17°c</td>
                    <td className="p-3 text-yellow-50">17°c</td>
                    <td className="p-3 text-yellow-50">17°c</td>
                    <td className="p-3 text-yellow-50">17°c</td>
                </tr>
            </thead>
        </table>
      </div>
    </>)
}