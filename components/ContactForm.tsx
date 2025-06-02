"use client";

import { MainBtn } from "@/components/buttons/MainBtn";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormField = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  label,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  label?: string;
}) => {
  const isDate = type === "date";

  return (
    <div className="relative w-full max-w-4xl">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <div className={`relative ${isDate ? "flex items-center" : ""}`}>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={isDate ? "Wybierz datę" : placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`outline-brand w-full rounded border p-2 pr-10 text-black outline-1 lg:pr-2 ${
            isDate ? "h-10" : ""
          }`}
        />
      </div>
    </div>
  );
};

const MessageStatus = ({
  status,
  loading,
  statusType,
}: {
  status: string | null;
  loading: boolean;
  statusType: "success" | "error" | null;
}) => (
  <div className="flex items-center space-x-2 text-sm">
    {loading && (
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-sky-300 border-t-transparent"></div>
    )}
    <p
      className={`ml-2 ${
        statusType === "success"
          ? "text-green-400"
          : statusType === "error"
            ? "text-red-400"
            : "text-white"
      }`}
    >
      {status}
    </p>
  </div>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null,
  );
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Wysyłanie...");
    setLoading(true);
    setStatusType(null);

    try {
      const phoneDigitsOnly = formData.phone.replace(/\D/g, "");
      if (phoneDigitsOnly.length < 9) {
        setStatus("Numer telefonu musi zawierać co najmniej 9 cyfr.");
        setStatusType("error");
        return;
      }
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Wiadomość wysłana!");
        setStatusType("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });

        setTimeout(() => {
          router.push("/dziekuje");
        }, 500);
      } else {
        setStatus("Błąd podczas wysyłania.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
      setStatus("Błąd podczas wysyłania.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-[9999] mx-auto max-w-2xl rounded-lg bg-white p-4 px-6 text-start text-black">
      <p className="text-center text-2xl">Formularz kontaktowy</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <FormField
          name="name"
          placeholder="Imię i nazwisko"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          name="email"
          type="email"
          placeholder="Adres e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          name="phone"
          placeholder="Nr telefonu"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <FormField
          name="date"
          type="date"
          label="Data wydarzenia (opcjonalnie)"
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Kilka słów o tym jakie zdjęcia Cię interesują."
          required
          className="outline-brand w-full rounded border p-2 outline-1"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="ml-auto w-full text-end">
          <MainBtn type="submit">
            {status ? (
              <MessageStatus
                status={status}
                loading={loading}
                statusType={statusType}
              />
            ) : (
              <span>Wyślij wiadomość</span>
            )}
          </MainBtn>
        </div>
      </form>
    </div>
  );
}
