export function formatMessage(message:string){
    if (!messagesDictionary[message]) return message
    return messagesDictionary[message]
}

const messagesDictionary={
    "Firebase: Error (auth/email-already-in-use).":"This email is already in use, try another email or loging with this email.",
    "Firebase: Password should be at least 6 characters (auth/weak-password).":"Password should be at least 6 characters!.",
    "Firebase: Invalid format. (auth/invalid-phone-number).":"This phone is not valid.",
    "Firebase: TOO_LONG (auth/invalid-phone-number).":"Invalid Phone number, it's too long!"
}