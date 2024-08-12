import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun} from '@fortawesome/free-solid-svg-icons';

export default function TablaClimaDia() {
    return(<>
    <div className="flex justify-center">
        <table className="rounded bg-black bg-opacity-25 border-gray-200">
            <thead className="">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-white">10:00</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-white">11:00</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-white">12:00</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-white">13:00</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-white">14:00</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-white">15:00</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-white">16:00</th>
                </tr>
                <tr>
                    <td className="p-3 text-amber-400 text-2xl"><FontAwesomeIcon icon={faSun} /></td>
                    <td className="p-3 text-amber-400 text-2xl"><FontAwesomeIcon icon={faSun} /></td>
                    <td className="p-3 text-amber-400 text-2xl"><FontAwesomeIcon icon={faSun} /></td>
                    <td className="p-3 text-amber-400 text-2xl"><FontAwesomeIcon icon={faSun} /></td>
                    <td className="p-3 text-amber-400 text-2xl"><FontAwesomeIcon icon={faSun} /></td>
                    <td className="p-3 text-amber-400 text-2xl"><FontAwesomeIcon icon={faSun} /></td>
                    <td className="p-3 text-amber-400 text-2xl"><FontAwesomeIcon icon={faSun} /></td>
                </tr>
                <tr>
                    <td className="p-3 text-white">17°c</td>
                    <td className="p-3 text-white">17°c</td>
                    <td className="p-3 text-white">17°c</td>
                    <td className="p-3 text-white">17°c</td>
                    <td className="p-3 text-white">17°c</td>
                    <td className="p-3 text-white">17°c</td>
                    <td className="p-3 text-white">17°c</td>
                </tr>
            </thead>
        </table>
      </div>
    </>);
}