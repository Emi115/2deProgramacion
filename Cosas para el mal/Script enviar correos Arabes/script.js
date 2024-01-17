function sendEmail(){
    //correo al cual envias un correo electronico
    const destinatario = "juan.tornayiglesias.web@adaits.es"; 
    //Asunto
    GmailApp.sendEmail(destinatario, "مرحبًا يا كتي", 
    //cuerpo
    "لديك 25 يومًا لإرسال 40 ألف يورو إلى رقم IBAN 1726162836172834 وإلا سنختطفك ونضاجع كل الخيول القبيحة التي لديك. أتمنى لك كل خير. https://fotografias.lasexta.com/clipping/cmsimages02/2017/09/16/386C236A-A4E8-4975-817E-A47BEB971E44/98.jpg?crop=783,441,x0,y12&width=1900&height=1069&optimize=low&format=webply");
  }