// import { Send } from "lucide-react";
// import { useState } from "react";
// import axios from "axios";
const Contact = () => {

    // const [emailData, setEmailData] = useState({
    //     to: '',
    //     subject: '',
    //     text: '',
    // });

    // // Handle input changes
    // const handleChange = (e :any) => {
    //     setEmailData({ ...emailData, [e.target.name]: e.target.value });
    // };

    // // Send email via backend
    // const sendEmail = async (e: any) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post('http://localhost:3000/send-email', emailData);
    //         alert(res.data.message);
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //         alert('Failed to send email');
    //     }
    // };


    return (
        <div className="max-w-full md:max-w-[60%] mx-auto p-4 sm:p-6 md:p-8  dark:text-gray-100  rounded-2xl backdrop-blur-xl bg-white/1">
            {/* Section Title */}
            <div className="relative mb-12 text-center">
                <h2 className="text-3xl font-bold dark:text-gray-100 inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent"></div>
            </div>

            {/* Main Grid */}
            <div className="">
                {/* Contact Form */}
                {/* <div className="relative overflow-hidden rounded-md shadow-lg dark:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 opacity-10"></div>
                    <div className="p-6 relative">
                        <form className="space-y-4" onSubmit={sendEmail}>
                            <div className="grid gap-2">
                                <label htmlFor="to" className="text-sm font-medium">Recipient Email</label>
                                <input
                                    id="to"
                                    name="to"
                                    value={emailData.to}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background/70 dark:bg-gray-700 backdrop-blur-sm px-3 py-2 text-sm placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Recipient's email"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    value={emailData.subject}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background/70 dark:bg-gray-700 backdrop-blur-sm px-3 py-2 text-sm placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Email subject"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="text" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="text"
                                    name="text"
                                    value={emailData.text}
                                    onChange={handleChange}
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background/70 dark:bg-gray-700 backdrop-blur-sm px-3 py-2 text-sm placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Your message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-2 px-4 rounded text-black bg-white font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity border flex items-center justify-center gap-4"
                            >
                                <Send size={18} />
                                Send Email
                            </button>
                        </form>
                    </div>
                </div> */}

                {/* Contact Information */}
                <div className="bg-whit p-4 sm:p-6">
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-light">
                                    Contact Information
                                </h3>
                                <p className="text-muted-foreground mb-6 dark:text-gray-400">
                                    Feel free to reach out to me through any of these channels. I'm always open to discussing new projects,
                                    creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-center gap-3 group">
                                    <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href="mailto:vishalgajula0709@gmail.com"
                                        className="hover:text-primary transition-colors"
                                    >
                                        vishalgajula0709@gmail.com
                                    </a>
                                </div>
                                {/* GitHub */}
                                <div className="flex items-center gap-3 group">
                                    <div className="p-3 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary group-hover:bg-secondary/20 transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404 11.5 11.5 0 013.003.404c2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.623-5.48 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href="https://github.com/GAJULAVISHAL"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-secondary transition-colors"
                                    >
                                        github.com/GAJULAVISHAL
                                    </a>
                                </div>
                                {/* LinkedIn */}
                                <div className="flex items-center gap-3 group">
                                    <div className="p-3 rounded-full bg-accent/10 dark:bg-accent/20 text-accent group-hover:bg-accent/20 transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.786-1.75-1.754s.784-1.754 1.75-1.754 1.75.786 1.75 1.754-.784 1.754-1.75 1.754zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.867-3.061-1.867 0-2.153 1.458-2.153 2.966v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.845-1.562 3.041 0 3.605 2.001 3.605 4.604v5.591z" />
                                        </svg>
                                    </div>
                                    <a
                                        href="https://linkedin.com/in/vishal-gajula-410902271"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-accent transition-colors"
                                    >
                                        linkedin.com/in/vishal-gajula-410902271
                                    </a>
                                </div>
                            </div>
                            {/* Resume Download */}
                            <div className="pt-4">
                                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-light">Resume</h3>
                                <a
                                    href="https://res.cloudinary.com/duqbf6np3/image/upload/v1742397798/Vishal_Resume_gvdkyz.pdf"
                                    download
                                    className="inline-block border border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors py-2 px-4 rounded"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
