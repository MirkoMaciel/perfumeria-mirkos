/* PERFUMES PRODUCTOS */

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1pbNZBWzxTPMro333oLVDrrApDapogtXa4-lZJjbXeiU/edit?gid=0#gid=0";


/* TOMAR CSV -> CONVERTIR EN ARRAY */

function csvToObjetos(csv){
    const [encabezados, ...filas] = csv.trim().split("\n");
    const keys = encabezados.split(",");

    return filas.map(fila =>{
        const valores = fila.split(",");
        const obj = {};

        keys.forEach(( key, i ) =>{
            const val = valores[i]?.trim();
            //Convertir números
            obj[key.trim()] = isNaN(val) ? val : Number(val);
        });
        return obj;
    });
}
// Cargar desde Sheets
async function cargarProductos() {
  try {
    mostrarLoading(true);
    const res  = await fetch(SHEET_URL);
    const csv  = await res.text();
    const data = csvToObjetos(csv);
    renderCards(data);
  } catch (error) {
    console.error("Error al cargar:", error);
    document.getElementById("productos").innerHTML = 
      "<p>Error al cargar productos 😢</p>";
  } finally {
    mostrarLoading(false);
  }
}

function mostrarLoading(estado) {
  document.getElementById("loading").style.display = estado ? "block" : "none";
}

// Iniciar
cargarProductos();