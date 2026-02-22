'use client';

import { useState, FormEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SUBJECT_OPTIONS = [
  { value: '', label: 'Select Subject' },
  { value: 'general', label: 'General inquiry' },
  { value: 'collection', label: 'Collection & artworks' },
  { value: 'research', label: 'Research & publications' },
  { value: 'membership', label: 'Membership' },
  { value: 'events', label: 'Events' },
  { value: 'other', label: 'Other' },
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      subscribe: formData.get('subscribe') === 'on',
      agreeTerms: formData.get('agreeTerms') === 'on',
    };

    if (!data.agreeTerms) {
      setErrorMessage('Please agree to the terms to submit.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to send message');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
        <p className="text-lg text-muted-foreground">
          Thank you for your message. We&apos;ll respond to your inquiry within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            required
            className={cn(inputClass, 'appearance-none pr-10')}
          >
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          placeholder="Write your message here..."
          className={cn(inputClass, 'min-h-[160px] resize-y')}
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" name="subscribe" className="rounded border-input" />
          <span className="text-sm">Subscribe to newsletter</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" name="agreeTerms" required className="rounded border-input" />
          <span className="text-sm">I agree to the terms</span>
        </label>
      </div>

      {errorMessage && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <Button type="submit" disabled={status === 'loading'} size="lg">
        {status === 'loading' ? 'Sending...' : 'Submit'}
      </Button>

      <p className="text-sm text-muted-foreground">
        We&apos;ll respond to your inquiry within 24 hours.
      </p>
    </form>
  );
}

const inputClass =
  'w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary';
