"use client";

import { useState } from "react";

function FieldInput({
  label,
  type = "text",
  required,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        name={label.toLowerCase()}
        placeholder={label}
        required={required}
        className="w-full border-0 border-b border-cream/30 bg-transparent pb-2.5 font-serif text-[15px] text-cream placeholder-cream/40 outline-none transition-colors duration-200 ease-out focus:border-[#ECC711]"
      />
    </label>
  );
}

function FieldCheckbox({
  label,
  required,
}: {
  label: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.5] text-cream/70">
      <input
        type="checkbox"
        required={required}
        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#DD0522]"
      />
      <span>{label}</span>
    </label>
  );
}

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div>
        <p className={`${"font-mono text-[11px] tracking-[0.14em] uppercase"} mb-3 text-[#ECC711]`}>
          ¡Listo! Ya estás suscrito.
        </p>
        <p className="text-[14px] leading-[1.6] text-cream/60">
          Pronto te llegarán novedades y promociones de Fu Man Chu.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <p className="mb-5 font-mono text-[11px] tracking-[0.14em] uppercase text-[#FCF52B]">
        Suscríbete
      </p>
      <p className="mb-6 text-[14px] leading-[1.6] text-cream/68">
        Recibe novedades y promociones de Fu Man Chu.
      </p>

      <div className="flex flex-col gap-5">
        <FieldInput label="Nombre" required />
        <FieldInput label="Apellido" required />
        <FieldInput label="Celular" type="tel" />
        <FieldInput label="Correo" type="email" required />
      </div>

      <button
        type="submit"
        className="mt-6 w-full cursor whitespace-nowrap bg-reserva/80 px-6 py-3 font-display text-[12px] font-semibold uppercase tracking-[0.24em] text-cream transition-[background-color,box-shadow,transform] duration-500 ease-in-out hover:-translate-y-0.5 hover:bg-reserva"
      >
        Suscríbete
      </button>

      <div className="mt-6 flex flex-col gap-3">
        <FieldCheckbox
          required
          label={
            <>
              He leído y acepto las{" "}
              <a href="#" className="underline underline-offset-2 hover:text-[#ECC711]">
                políticas de privacidad
              </a>{" "}
              de datos de esta web.
            </>
          }
        />
        <FieldCheckbox label="Acepto recibir promociones por WhatsApp o correo (Opcional)." />
      </div>
    </form>
  );
}
