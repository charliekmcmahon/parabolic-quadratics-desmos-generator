
// JavaScript Written by Charlie McMahon.
// Define the first layer's vector for the section you want
function showDefaultValues(){

	console.log('using default values');
	document.getElementById("x_value").value = "-0.9";
	document.getElementById("y_value").value = "1.4";
	document.getElementById("a_value").value = "0.5";
	document.getElementById("row_value").value = "5";

}

function showInput() {
			var start_vertex_x = document.getElementById("x_value").value;
			var start_vertex_y = document.getElementById("y_value").value;
			var start_a_value = document.getElementById("a_value").value;

			// Define how many rows of parabolas you would like
			var parabolaRows = document.getElementById("row_value").value;

			var output_x;
			var i;

			var elt = document.getElementById('calculator');
			var calculator = Desmos.GraphingCalculator(elt);
			calculator.setExpression({ id: 'graph1', latex: `y=${a_value}(x-${x_value})^{2}-${y_value}` });
			
			// Do first layer

				var output_x = start_vertex_x;
			  var output_y = start_vertex_y;
				var output_a = start_a_value;

				calculator.setExpression({ id: `graph`, latex: `y=${output_a}(x-${output_x})^{2}+${output_y}` });


			// This loops the program however many times for the rows. 
			for (i = 0; i < parabolaRows; i++) { 

				output_x = (Math.round((start_vertex_x * 1.5) * 100) / 100) ; // Multiply the 'x' and 'y' values by 1.5...
				output_y = (Math.round((start_vertex_y * 1.5) * 100) / 100) // ...each time to make the parabolas larger.
				output_a = (Math.round((start_a_value / 1.5) * 100) / 100); // Divide the a value to make them longer.
				
				// Output all of the data for use.
				console.log("x = " + output_x);
				console.log("y = " + output_y);
				console.log("a = " + output_a);
				
				document.getElementById(`display-${i}`).innerHTML = (`X: ${output_x} Y: ${output_y} A: ${output_a}`)

				start_vertex_x = output_x;
				start_vertex_y = output_y;
				start_a_value = output_a;
				
				console.log("\n");

				calculator.setExpression({ id: `graph${i}`, latex: `y=${output_a}(x-${output_x})^{2}+${output_y}` });
			}
}