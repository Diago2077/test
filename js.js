// Exportar el resultado usando separador de punto y coma (;)
    function exportarCSV() {
        if (resultadoFinal.length === 0) return;

        let csvContent = "\uFEFF"; // BOM para caracteres especiales y acentos
        // Cabeceras
        csvContent += "Codigo;Producto;Cod_Color;Color;Talle;Precio\n";

        resultadoFinal.forEach(fila => {
            // Convertir el precio a texto y cambiar el punto decimal por una coma
            let precioCorregido = String(fila.precio).replace('.', ',');
            
            // Envolver en comillas por seguridad
            let precio = `"${precioCorregido}"`;
            
            let row = `${fila.codigo};${fila.producto};${fila.codColor};${fila.colorDesc};${fila.talle};${precio}`;
            csvContent += row + "\n";
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "Inventario_Unificado.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }