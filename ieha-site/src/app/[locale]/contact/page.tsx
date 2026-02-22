import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-8">Contact form and info.</p>
      <ContactForm />
    </div>
  );
}
