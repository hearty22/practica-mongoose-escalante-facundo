Relaciones:

Las relaciones se implementaron mayormente de forma referenciada en lugar de embebida. No se implementó ninguna relación embebida por falta de tiempo.
Se prefirieron las relaciones referenciadas por comodidad y familiaridad con las bases de datos SQL. Además, esta aproximación permite obtener información de otros modelos con facilidad, simplemente usando el _id o ObjectId de otro documento. También, al agregar la función .populate() en el campo que contiene el ObjectId, se puede obtener la información completa del modelo al que se hace referencia, no solo su identificador.

Lógica y Tipos de Relaciones:

1:1 (Uno a uno): Este tipo de relación se implementó entre los modelos Character e Inventory, de modo que un inventario pertenezca a un solo personaje y un personaje tenga un solo inventario.
1:N (Uno a muchos): Esta relación se implementó entre los modelos Player y Character, para que un jugador pueda tener muchos personajes, pero cada personaje pertenezca a un solo jugador.
M:M (Muchos a muchos): Por último, este tipo de relación se implementó entre los modelos Inventory e Item. De esta manera, varios inventarios pueden contener muchos ítems, y un mismo ítem puede estar presente en múltiples inventarios.

Eliminaciones:

Según la investigación, los métodos de eliminación lógica y en cascada no se pueden implementar de forma nativa con Mongoose. Por lo tanto, se debe desarrollar la lógica manualmente en los controladores.
La eliminación en cascada se refiere a la eliminación de un documento y de todos los documentos asociados que no pueden existir sin él.
Por otro lado, la eliminación lógica se puede implementar de manera más sencilla cambiando el método de eliminación de findByIdAndDelete a findByIdAndUpdate, y actualizando un campo booleano, como deleted o active. De esta forma, las búsquedas solo mostrarán los documentos que no han sido marcados como eliminados.