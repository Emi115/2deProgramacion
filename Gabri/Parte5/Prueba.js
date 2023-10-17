function descomponerURL(url) {
    const urlObj = new URL(url);
  
    const protocol = urlObj.protocol;
    const ipAddress = urlObj.hostname;
    const subDomain = urlObj.hostname.split('.').slice(0, -2).join('.');
    const domainName = urlObj.hostname.replace(subDomain + '.', '');
    const folderTree = urlObj.pathname;
    const targetFile = urlObj.pathname.split('/').pop();
    const argumentsFile = urlObj.searchParams.toString();
  
    return {
      protocol,
      ipAddress,
      subDomain,
      domainName,
      folderTree,
      targetFile,
      argumentsFile,
    };
  }
  
  const url = 'https://www.google.com/illo/cabesa/olakease.html?nosequeesesto=betis&sevilla=andalucia';
  const descompuesta = descomponerURL(url);
  
  console.log('Protocolo:', descompuesta.protocol);
  console.log('Dirección IP o Nombre de dominio:', descompuesta.ipAddress);
  console.log('Subdominio:', descompuesta.subDomain);
  console.log('Nombre de dominio:', descompuesta.domainName);
  console.log('Ruta de carpetas:', descompuesta.folderTree);
  console.log('Archivo objetivo:', descompuesta.targetFile);
  console.log('Argumentos de la URL:', descompuesta.argumentsFile);
  