var vA = prompt("coloque o valor de A:");
		var vB = prompt("coloque o valor de B:");
		var vC = prompt("coloque o valor de C:");
		var coef;
		var coef2;

		var delta = (vB * vB) - 4 * vA * vC;
		document.write( "Valor de Delta => " + delta + "<br/>" + "<br/>");if(delta < 0){document.write("o delta é negativo, não tem raizes reais. <br/>" + "<br/>");  
          document.write("se a conta estiver nao estiver correta clique aqui" + "<br/>" + "</br>")
document.write("<button>aqui</button>")
		} else{
		  document.write("Para Delta positivo as raizes são diferentes: <br/>" + "<br/>" );  
		  coef = (-vB + Math.sqrt(delta)) / (2 * vA);
		  coef2 = (-vB - Math.sqrt(delta)) / (2 * vA);
		   document.write("x' = " + coef + "<br/>");
		  document.write("x'' = " + coef2 + "<br/>" + "<br/>");
          document.write("se a conta estiver nao estiver correta clique aqui" + "<br/>")
          document.write("<button>aqui</button>")
		}
		console.write()