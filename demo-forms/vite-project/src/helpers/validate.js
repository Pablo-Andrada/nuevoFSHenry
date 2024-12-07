export const validate = (input) => {
    const errors = {};
  
    // Validación: El nombre de usuario es requerido
    if (!input.username.trim()) {
      errors.username = "Username is required";
    } 
    // Validación: El nombre de usuario debe ser un email válido
    else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i.test(input.username)) {
      errors.username = "Username must be a valid email address";
    }
  
    // Validación: La contraseña es requerida
    if (!input.password) {
      errors.password = "Password is required";
    } 
    // Validación: La contraseña debe tener al menos 8 caracteres
    else if (input.password.length >= 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    // Validación: La contraseña debe incluir al menos un número
    else if (!/\d/.test(input.password)) {
      errors.password = "Password must contain at least one number";
    }
    // Validación: La contraseña debe incluir al menos una letra mayúscula
    else if (!/[A-Z]/.test(input.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    }
    // Validación: La contraseña debe incluir al menos un carácter especial
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.password)) {
      errors.password = "Password must contain at least one special character";
    }
  
    // Retornamos el objeto errors con los mensajes de error, si los hay
    return errors;
  };
  