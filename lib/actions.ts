'use server'


export const resetPasswordAction = async (prevState: unknown, formData: FormData) => {
    const email = formData.get('email')
    if (email) {
        const message = 'your password has been reset'
        
        return {
            message,
            data: email.toString()
        }
    }

    
    
  }