async function enviarScript(scriptText) {
	// Dividir el texto del script en líneas y eliminar líneas vacías
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	// Obtener el elemento principal y el área de texto editable
	const main = document.querySelector("#main");
	const textarea = main.querySelector(`div[contenteditable="true"]`);
  
	// Verificar si hay una conversación abierta
	if (!textarea) {
	  throw new Error("No hay una conversación abierta");
	}
  
	// Iterar sobre cada línea del script
	for (const line of lines) {
	  console.log(line);
  
	  // Enfocar el área de texto editable
	  textarea.focus();
	  // Insertar el texto de la línea actual en el área de texto
	  document.execCommand('insertText', false, line);
	  // Despachar un evento de cambio en el área de texto
	  textarea.dispatchEvent(new Event('change', { bubbles: true }));
  
	  // Esperar un breve período de tiempo antes de hacer clic en el botón de enviar
	  setTimeout(() => {
		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
	  }, 100);
  
	  // Si no es la última línea, esperar 250 ms antes de continuar con la siguiente línea
	  if (lines.indexOf(line) !== lines.length - 1) {
		await new Promise(resolve => setTimeout(resolve, 250));
	  }
	}
  
	// Devolver la cantidad de líneas enviadas
	return lines.length;
  }
  
  // Llamar a la función enviarScript con el script proporcionado
enviarScript(`
Juan Tornay: Un Hombre de Extraordinario Talento y Carácter Inspirador

Introducción

En un mundo lleno de personas comunes, de vez en cuando, surge un individuo extraordinario que deja una huella imborrable en la historia y en la vida de quienes tienen la fortuna de conocerlo. Juan Tornay es uno de esos seres excepcionales que merece ser celebrado y alabado por sus múltiples talentos y su carácter inspirador. A lo largo de este extenso texto, exploraremos la vida, los logros y la personalidad única de Juan Tornay, destacando cómo ha influido de manera positiva en diversos aspectos de la sociedad y en las vidas de quienes han tenido la oportunidad de cruzarse en su camino.

I. El Comienzo de una Trayectoria Brillante

La historia de Juan Tornay es un relato de perseverancia y determinación desde sus humildes comienzos en un pequeño pueblo hasta llegar a ser un referente en su campo. Juan nació en una familia trabajadora que le inculcó valores fundamentales como el esfuerzo, la honestidad y la empatía. Desde una edad temprana, demostró una curiosidad insaciable y un amor por el aprendizaje que lo impulsarían a alcanzar grandes alturas en su vida.

A. La Infancia y la Formación

Juan Tornay pasó su infancia explorando el mundo que lo rodeaba. Creció en un entorno rural, rodeado de la belleza de la naturaleza, lo que le inspiró a desarrollar una profunda conexión con el medio ambiente. Aprendió a apreciar la importancia de la tierra y la biodiversidad, sembrando las semillas de lo que se convertiría en su pasión por la conservación ambiental.

Desde una edad temprana, Juan mostró una habilidad innata para el estudio. Su dedicación en la escuela le permitió destacarse académicamente, ganando reconocimiento por su inteligencia y determinación. Su familia, consciente de su potencial, lo apoyó en su búsqueda constante de conocimiento.

B. El Ascenso en la Educación

A medida que Juan avanzaba en su educación, su entusiasmo por aprender solo se fortalecía. Desarrolló un profundo interés en las ciencias naturales y la ecología, lo que lo llevó a buscar oportunidades para estudiar en instituciones de renombre en el campo de la biología y la conservación. Su tenacidad le permitió obtener becas y financiamiento para sus estudios, a pesar de las dificultades financieras que enfrentaba.

Juan Tornay se destacó en la universidad, destacando por su dedicación a la investigación y su habilidad para abordar problemas complejos en el ámbito de la ecología. Sus profesores rápidamente reconocieron su potencial y lo alentaron a seguir adelante en su carrera académica.

II. Contribuciones a la Ciencia y la Conservación

La pasión de Juan Tornay por la ecología y la conservación lo llevó a realizar investigaciones innovadoras que han tenido un impacto significativo en la comprensión y la preservación de los ecosistemas naturales. Sus contribuciones a la ciencia son una verdadera fuente de inspiración y han dejado una marca indeleble en la comunidad científica.

A. Investigación Pionera

Juan Tornay se destacó por su investigación pionera en el campo de la ecología de los bosques tropicales. A lo largo de años de estudio y trabajo de campo en lugares remotos y desafiantes, pudo documentar la diversidad de especies, las interacciones ecológicas y los patrones de biodiversidad en estos ecosistemas críticos. Su enfoque meticuloso y su compromiso con la investigación de alta calidad lo convirtieron en un líder en su campo.

Una de las contribuciones más destacadas de Juan fue su trabajo en la identificación de especies amenazadas y la elaboración de estrategias de conservación efectivas. Su investigación permitió a las autoridades y a las organizaciones de conservación tomar medidas concretas para proteger los hábitats en peligro y las especies en riesgo de extinción.

B. Educación y Concienciación

Juan Tornay no solo se dedicó a la investigación científica, sino que también se esforzó por compartir su pasión y conocimiento con el público en general. Reconoció la importancia de educar a la sociedad sobre la importancia de la conservación y la preservación de la biodiversidad.

Creó programas de educación ambiental en escuelas locales y colaboró con organizaciones sin fines de lucro para sensibilizar a la comunidad sobre los desafíos que enfrentan los ecosistemas naturales. Su enfoque accesible y su habilidad para comunicar conceptos complejos de manera comprensible le permitieron llegar a una amplia audiencia, inspirando a jóvenes y adultos por igual.

III. Liderazgo en la Conservación

El liderazgo de Juan Tornay en el campo de la conservación no se limitó a su trabajo de investigación y educación. También se destacó como un defensor incansable de la preservación de los ecosistemas naturales y la protección de la biodiversidad.

A. Colaboraciones Internacionales

Juan Tornay colaboró con científicos y organizaciones de todo el mundo para abordar los desafíos globales relacionados con la conservación. Sus esfuerzos en la creación de redes de trabajo permitieron la transferencia de conocimientos y la implementación de estrategias efectivas de conservación en diversos lugares del planeta.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
