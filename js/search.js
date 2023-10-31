//import { mockproductos } from "../mock/mock.js";
//import * as constantes from "../mock/mock.js";

 const mockproductos = [
    {titulo:"Nacidos De La Bruma 3 - El Heroe De Las Eras - Sanderson",
     autor:"Brandon Sanderson",
     precio:"17.999",
     descripcion:"Durante mil años los skaa han vivido esclavizados y sumidos en el miedo al Lord Legislador, que ha reinado con un poder absoluto gracias al terror y a la poderosa magia de la alomancia. Kelsier, el Superviviente, el único que ha logrado huir de los Pozos de Hathsin, encuentra a Vin, una pobre chica skaa con mucha suerte. Los dos se unen a la rebelión que los skaa intentan desde hace un milenio y vencen al Lord Legislador. Pero acabar con el Lord Legislador fue la parte sencilla. El verdadero desafío consistirá en sobrevivir a las consecuencias de su caída. En El héroe de las eras se explican el porqué de la niebla y las cenizas, las tenebrosas acciones del Lord Legislador y la naturaleza del Pozo de la Ascensión. Vin y el Rey Elend buscan en los últimos escondites del Lord Legislador y descubren el peligro que acecha a la humanidad. ¿Conseguirán detenerlo a tiempo? La crítica ha dicho... «Sanderson es un escritor brillante.» Patrick Rothfuss «Sanderson es una bomba a punto de explotar.» Ernest Alós, El Periódico de Catalunya" },
     {titulo:"Nacidos De La Bruma Mistborn 4 - Aleacion De Ley - Sanderson",
     autor:"Brandon Sanderson",
     precio:"17.999",
     descripcion:"Han pasado trescientos años desde los acontecimientos narrados en la primera trilogía de la saga, y Scadrial se encuentra ahora cerca de la modernidad: ferrocarriles, canales, iluminación eléctrica y los primeros rascacielos invaden el planeta. Aunque la ciencia y la tecnología están alcanzando nuevos retos, la antigua magia de la alomancia continúa desempeñando un papel fundamental. En una zona conocida como los Áridos, existen herramientas cruciales para aquellos hombres y mujeres que intentan establecer el orden y la justicia. Uno de estos hombres es Lord Waxillium Ladrian, experto en metales y en el uso de la alomancia y la feruquimia. Después de vivir veinte años en los Áridos, Wax se ha visto obligado, por una tragedia familiar, a volver a la metrópolis de Elendel. Sin embargo, y a su pesar, deberá guardar las armas y asumir las obligaciones que exige el hecho de estar rodeado de la clase noble. O al menos eso cree, ya que aún no sabe que las mansiones y las elegantes calles arboladas de la ciudad pueden ser incluso más peligrosas que las llanuras de los Aridos. Un skyline metálico de bruma, de ceniza y vapor conquista el cielo amenazando a todos aquellos que viven y luchan debajo de él. Desde 2006, y en solo diez años, Brandon Sanderson se ha consolidado como el gran renovador de la fantasía del siglo XXI y el autor del género más prolífico del mundo. Ha logrado ganarse a ocho millones de lectores, ser publicado en treinta países y convertirse en el heredero de todo un género. Reseñas: «Brandon Sanderson es una leyenda.» Alexelcapo, @EvilAFM «Sanderson es un escritor brillante.» Patrick Rothfuss «El renovador de la fantasía, el gran reinventor de la magia.» Ricard Ruiz Garzón, Els Matins de TV3 «Sanderson es una bomba a punto de explotar.» Ernest Alós, El Periódico de Catalunya «Si te gusta la literatura fantástica, lee a Brandon Sanderson.» Chicote «Hace tiempo que George R.R. Martin tiene heredero.» Javier Blánquez, El Mundo" },
     
     {titulo:"Elantris - Brandon Sanderson",
     autor:"Brandon Sanderson",
     precio:"17.999",
    descripcion:"Una novela imprescindible para los amantes de la fantasía épica. Por el consagrado autor del género Brandon Sanderson.«La más bella novela de fantasía que se escribirá en muchos años.» Orson Scott Card, autor de El juego de Ender" },
    {titulo:"Imperio Final - Nacidos De La Bruma 1 - Brandon Sanderson",
     autor:"Brandon Sanderson",
     precio:"17.999",
     descripcion:"Durante mil años han caído las cenizas y nada florece. Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes e inmortalidad. Le ayudan «obligadores» e «inquisidores», junto a la poderosa magia de la «alomancia». Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborns). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y la atroz dominación del Lord Legislador."
    }
]

function searchLibro(event) {
  let inputbusqueda= document.getElementById("busqueda");
  const busqueda = inputbusqueda.value;
   event.preventDefault();

  //no llegue a completar la pagina de busqueda, al entrar en consola aparece la lista de busqueda
  //en la pagina de Mi carrito solo muestra como se veria un producto seleccionado
   location.replace("http://127.0.0.1:5500/pages/busqueda.html?busqueda="+busqueda);
}

function miCarrito() {
    location.replace("http://127.0.0.1:5500/pages/micarrito.html");
}