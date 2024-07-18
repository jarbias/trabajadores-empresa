//Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas 
//trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a 10$. 
//y la hora en tiempo extra se paga a 25$. Se desea que el programa genere monto total pagado 
//por horas extras y nombre del trabajador con el menor salario obtenido. 
import Trabajadores from "./Trabajadores.js";
import Empresa from "./Empresa.js";
 
let tra1 = new Trabajadores("Mary", 30, 10);
let tra2 = new Trabajadores("José", 35, 5); 
let tra3 = new Trabajadores("Carlos", 35, 0);
let tra4 = new Trabajadores ("Pedro", 25, 10);      

let emp = new Empresa();

emp.procesartrabajadores(tra1);
emp.procesartrabajadores(tra2);
emp.procesartrabajadores(tra3);
emp.procesartrabajadores(tra4);
let salida = document.getElementById("salida");

salida.innerHTML = "monto total pagado por horas extras es: " + emp.devolvertotalhex()+ "$<br>";
salida.innerHTML += "El nombre del trabajador con el menor salario obtendo es: " + emp.devolvernommenor()+ " con un salario de " + emp.devolvertotalmenor()+"$";