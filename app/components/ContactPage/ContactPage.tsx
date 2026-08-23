import { useState } from "react"
import Card from "../Card/Card"
import Text from "../Text/Text"
import EmailIcon from "./email.svg"
import LinkedinIcon from "./linkedin.svg"

export const ContactPage = () => {
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const sanitizeInput = (value: string) => {
        return value.replace(/<[^>]*>?/gm, '').trim();
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setStatusMessage(null);

        const formData = new FormData(event.currentTarget);
        
        const rawName = formData.get("name")?.toString() || "";
        const rawEmail = formData.get("email")?.toString() || "";
        const rawMessage = formData.get("message")?.toString() || "";

        const name = sanitizeInput(rawName);
        const email = sanitizeInput(rawEmail);
        const message = sanitizeInput(rawMessage);

        if (!name || name.length < 2) {
            setStatusMessage({ type: 'error', text: 'Please enter a valid name.' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
            return;
        }

        if (!message || message.length < 5) {
            setStatusMessage({ type: 'error', text: 'Message must be at least 5 characters long.' });
            return;
        }

        console.log("Validated & Sanitized Data:", { name, email, message });
        
        // TODO: Send data to your backend API route or email service (e.g., EmailJS, SendGrid)
        setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent.' });
        
        event.currentTarget.reset();
    }

    return (
        <div className="justify-self-center max-w-[700px] w-full">
            <Text size="xl2" fontWeight="bold" className="mb-5">CONTACT</Text>
            <Card className="w-full border-2" borderColor="border-emerald-300">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                    
                    {statusMessage && (
                        <div className={`p-3 rounded-lg text-sm ${statusMessage.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                            {statusMessage.text}
                        </div>
                    )}

                    <div>
                        <Text className="mb-1" size="xl" fontWeight="medium">Your Name</Text>
                        <input 
                            required 
                            name="name" 
                            type="text" 
                            placeholder="Enter your name" 
                            maxLength={100}
                            className="w-full p-2 border border-slate-300 rounded-md"
                        />
                    </div>
                    <div>
                        <Text className="mb-1" size="xl" fontWeight="medium">Email Address</Text>
                        <input 
                            required 
                            name="email" 
                            type="email" 
                            placeholder="Enter your email" 
                            maxLength={254}
                            className="w-full p-2 border border-slate-300 rounded-md"
                        />
                    </div>
                    <div>
                        <Text className="mb-1" size="xl" fontWeight="medium">Message</Text>
                        <textarea 
                            required 
                            name="message" 
                            placeholder="Enter your message" 
                            maxLength={1000}
                            className="w-full min-h-[100px] mb-2 p-2 border border-slate-300 rounded-md"
                        ></textarea>
                        <button type="submit" className="btn-outlined">Submit</button>
                    </div>
                </form>

                <a className="flex items-center my-5 gap-3" href="mailto:johncharlesdev@gmail.com">
                    <img className="h-10 w-10" src={EmailIcon} alt="Email" />
                    <div>
                        <Text fontWeight="bold">EMAIL</Text>
                        <Text>johncharlesdev@gmail.com</Text>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/john-charles-dev/" target="_blank" rel="noreferrer" className="flex items-center gap-3">
                    <img src={LinkedinIcon} className="h-10 w-10" alt="LinkedIn" />
                    <div>
                        <Text fontWeight="bold">LINKEDIN</Text>
                        <Text>https://www.linkedin.com/in/john-charles-dev/</Text>
                    </div>
                </a>
            </Card>
        </div>
    )
}