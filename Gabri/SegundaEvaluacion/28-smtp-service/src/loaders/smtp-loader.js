import { init } from '../services/smtp-service.js'

export default function (config) {
  init(config) // Inicializa el servicio SMTP con la configuración proporcionada
}
