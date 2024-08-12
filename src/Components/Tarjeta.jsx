import React from "react";
import BarraBusqueda from "./BarraBusqueda.jsx";
import Button from "./Button.jsx";
import ClimanHoy from "./ClimaHoy.jsx";
import TablaClimaDia from "./TablaClimaDia.jsx";
import TablaClimaSemana from "./TablaClimaSemana.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Tarjeta() {
    return(<>
        
    <div className="bg-[url('https://i.pinimg.com/originals/a5/d3/2f/a5d32fe1c2bfcb2e2a41996d7dfb0613.jpg')] bg-no-repeat bg-cover">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:hidden">

          </div>
          <div className="hidden lg:flex lg:gap-x-12">

          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <div  className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <a href="#"
                    className="text-white"
                  ><FontAwesomeIcon icon={faUser} />
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
            <BarraBusqueda/>
            <Button/>
        </div>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">

        <div className="mx-auto max-w-2xl py-32 sm:py-25 lg:py-22">
          <ClimanHoy/>
        </div>
      </div>
      <div className="grid grid-cols-2 pb-10">
        <TablaClimaDia/>
        <TablaClimaSemana/>
      </div>
</div>
    </>)
}