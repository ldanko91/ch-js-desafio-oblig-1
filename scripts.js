document.addEventListener('DOMContentLoaded', function() {
    
    let nombre
    let escliente
    let respuesta1
    let nombreuser
    let passuser
    let mailuser
    let celuser
    let cotizacion

    function clientedb(nombre, mailuser, celuser) {
        console.log("El sitio está siendo navegado por" + nombre + ", con mail " + mailuser + ", y celular " + celuser)
    }

    nombre = prompt("Bienvenido a Casa Danko! Cómo es tu nombre?")

    console.log(nombre)
        
    escliente = prompt("Que bueno que estés acá " + nombre + ". Eres un cliente previamente registrado?\n'1' Sí, estoy registrado previamente\n'2' Aún no estoy registrado") 

        while (isNaN(escliente) || escliente<1 || escliente>2) {

            alert("No inresaste una opción válida.\n Inténtalo nuevamente, o pulsa cancelar para salir")
            escliente = prompt("Eres un cliente previamente registrado?\n'1' Sí, estoy registrado previamente\n'2' Aún no estoy registrado")
            }

        if (escliente == 1) {
            alert("Bienvenido nuevamente " + nombre + "! Cómo podemos ayudarte hoy?")
            respuesta1 = prompt("1 Necesito una cotización personalizada.\n2 Necesito conocer la dirección del local.\n3 Quiero los links a las redes sociales.")
        
        } else {
            alert (nombre + ", vamos a registrar tu usuario. Por favor completa los siguientes campos:")
            nombreuser = prompt("Ingresa tu nombre y apellido")
            passuser = prompt("Ingresa una contraseña de 6 dígitos numéricos como mínimo")
                while (passuser.length < 6 || isNaN(passuser)) {
                    alert("No inresaste una contraseña válida.\n Inténtalo nuevamente, o pulsa cancelar para salir")
                    passuser = prompt("Ingresa una contraseña de 6 dígitos numéricos como mínimo")
                    }
            mailuser = prompt("Ingresa una dirección de mail válida. Recuerda que a ese mail se enviará el correo de verificación:")
            celuser = prompt("Ingresa tu número de celular:")
            while (celuser.length < 8 || isNaN(celuser)) {
                alert("No inresaste un número de teléfono válido.\n Inténtalo nuevamente, o pulsa cancelar para salir")
                celuser = prompt("Ingresa tu número de celular:")
                }
            
            alert ("Felicitaciones " + nombre + "! Completamos tu registro con los siguientes datos:\nNombre: " + nombreuser + "\nE Mail: " + mailuser + "\nCelular: " + celuser +"\nA la brevedad nos pondremos en contacto!")
            }

            if (respuesta1 == 1) {
                cotizacion = prompt("Escríbenos en el siguiente campo los materiales a cotizar:")
                mailuser = prompt("Ingresa tu correo electrónico para recibir la cotización")
                celuser = prompt("Ingresa tu número de celular para recibir la cotización por whatsapp")
                while (celuser.length < 8 || isNaN(celuser)) {
                    alert("No inresaste un número de teléfono válido.\n Inténtalo nuevamente, o pulsa cancelar para salir")
                    celuser = prompt("Ingresa tu número de celular:")
                    }
                alert ("Se enviará al mail: " + mailuser + " y al whatsapp " + celuser + " la cotización por los siguientes materiales:\n" + cotizacion + "\nGracias por contactarnos!")
            
            }else if (respuesta1 == 2) {
                alert ("La dirección del local es Avenida 7 número 2092, Berazategui Oeste.")
                if (window.confirm("Si cliqueas en 'OK' serás redirigido a nuestro site de google maps.\nSi cliqueas 'Cancelar' permanecerás en este sitio")) {
                    window.location.href='https://www.google.com/maps/place/Casa+Danko/@-34.7699326,-58.2449232,17z/data=!3m1!4b1!4m5!3m4!1s0x95a32ed16cce6f87:0x74da9f4dd5130194!8m2!3d-34.7699326!4d-58.2427345';
                }
            }else if (respuesta1 ==3) {
                alert ("Te enviaremos link a nuestras redes sociales!")
                mailuser = prompt("Ingresa tu correo electrónico para recibir los links en tu mail")
                celuser = prompt("Ingresa tu número de celular para recibir los links por whatsapp")
                while (celuser.length < 8 || isNaN(celuser)) {
                    alert("No inresaste un número de teléfono válido.\n Inténtalo nuevamente, o pulsa cancelar para salir")
                    celuser = prompt("Ingresa tu número de celular:")
                    }
                alert ("Te enviaremos al mail: " + mailuser + " y al whatsapp " + celuser + " los links a nuestras redes sociales oficiales.\nGracias por contactarnos!")

            }

            clientedb(nombre, mailuser, celuser)

            //la funcion clientedb simula el proceso de almacenado en una DB de clientes

}, false);