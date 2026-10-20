import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import Card from "../Card/Card"
import Text from "../Text/Text"
import EmailIcon from "./email.svg"
import LinkedinIcon from "./linkedin.svg"

export const ContactPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sanitizeInput = (value: string) => {
        return value.replace(/<[^>]*>?/gm, '').trim();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

        setIsLoading(true);

        try {
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if (!formRef.current) {
                throw new Error("Contact form is unavailable.");
            }

            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later or email me directly.' });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="justify-self-center max-w-[700px] w-full p-5">
            <Text as="h1" size="xl2" fontWeight="bold" className="mb-5">CONTACT</Text>
            <Card className="w-full border-2" borderColor="border-emerald-300">
                <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                    
                    {statusMessage && (
                        <div
                            role={statusMessage.type === 'error' ? 'alert' : 'status'}
                            aria-live={statusMessage.type === 'error' ? 'assertive' : 'polite'}
                            aria-atomic="true"
                            className={`p-3 rounded-lg text-sm ${statusMessage.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}
                        >
                            {statusMessage.text}
                        </div>
                    )}

                    <div>
                        <label htmlFor="contact-name" className="mb-1 block text-xl font-medium">Your Name</label>
                        <input 
                            id="contact-name"
                            required 
                            name="name" 
                            type="text" 
                            autoComplete="name"
                            placeholder="Enter your name" 
                            maxLength={100}
                            className="w-full p-2 border border-slate-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-email" className="mb-1 block text-xl font-medium">Email Address</label>
                        <input 
                            id="contact-email"
                            required 
                            name="email" 
                            type="email" 
                            autoComplete="email"
                            placeholder="Enter your email" 
                            maxLength={254}
                            className="w-full p-2 border border-slate-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-message" className="mb-1 block text-xl font-medium">Message</label>
                        <textarea 
                            id="contact-message"
                            required 
                            name="message" 
                            placeholder="Enter your message" 
                            maxLength={1000}
                            className="w-full min-h-[100px] mb-2 p-2 border border-slate-300 rounded-md"
                        ></textarea>
                        <button type="submit" disabled={isLoading} className="btn-outlined">
                            {isLoading ? "Sending..." : "Submit"}
                        </button>
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