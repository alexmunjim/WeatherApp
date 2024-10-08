import React from "react";

export default function BarraBusqueda() {
    return(<>
        <input
            id="searchCity"
            name="City"
            type="text"
            required
            placeholder="Buscar ciudad"
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
    </>)
}