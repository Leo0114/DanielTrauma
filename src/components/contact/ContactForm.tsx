import { useState, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import {
  consultTypes,
  bodyParts,
  contactPreferences,
  allowedFileTypes,
} from "@/constants/contact";

// ── Zod Schema ──
const schema = z.object({
  name: z.string().min(3, "Ingrese su nombre completo"),
  email: z.string().email("Ingrese un correo válido"),
  phone: z.string().min(10, "Ingrese un teléfono válido"),
  consultType: z.string().min(1, "Seleccione el tipo de consulta"),
  hasStudies: z.boolean().optional(),
  bodyPart: z.string().min(1, "Seleccione la zona afectada"),
  description: z.string().min(20, "Describa sus síntomas (mínimo 20 caracteres)"),
  contactPreference: z.string().min(1, "Seleccione su preferencia de contacto"),
});

type FormData = z.infer<typeof schema>;

interface UploadedFile {
  file: File;
  id: string;
  error?: string;
}

// Helpers
const MAX_MB = allowedFileTypes.maxSizeMB;
const MAX_FILES = allowedFileTypes.maxFiles;
const ALLOWED_EXTS = allowedFileTypes.extensions;

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(name: string): string {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (["dcm", "dicom"].includes(ext)) return "🩻";
  if (ext === "pdf") return "📄";
  if (["jpg", "jpeg", "png", "webp"].includes(ext)) return "🖼️";
  return "📎";
}

function validateFile(file: File): string | undefined {
  const ext = "." + (file.name.split(".").pop()?.toLowerCase() ?? "");
  if (!ALLOWED_EXTS.includes(ext)) {
    return `Formato no permitido (${ext}). Use: ${ALLOWED_EXTS.join(", ")}`;
  }
  if (file.size > MAX_MB * 1024 * 1024) {
    return `El archivo excede ${MAX_MB} MB`;
  }
}

export default function ContactForm() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { hasStudies: false },
  });

  const hasStudies = watch("hasStudies");

  // File handling
  const addFiles = useCallback((incoming: FileList | File[]) => {
    const arr = Array.from(incoming);
    const newFiles: UploadedFile[] = arr.map((f) => ({
      file: f,
      id: Math.random().toString(36).slice(2),
      error: validateFile(f),
    }));

    setUploadedFiles((prev) => {
      const combined = [...prev, ...newFiles];
      if (combined.length > MAX_FILES) {
        toast.error(`Máximo ${MAX_FILES} archivos permitidos`);
        return combined.slice(0, MAX_FILES);
      }
      return combined;
    });
  }, []);

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const onSubmit = async (_data: FormData) => {
    if (uploadedFiles.some((f) => f.error)) {
      toast.error("Hay archivos con errores. Por favor corríjalos.");
      return;
    }
    setIsSubmitting(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    toast.success(
      "¡Solicitud enviada! El equipo del Dr. Hernández le contactará en menos de 24 horas.",
      { duration: 6000 }
    );
  };

  // ── Input style ──
  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text dark:text-white placeholder-text-subtle dark:placeholder-slate-500 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50";
  const labelClass =
    "block text-sm font-semibold text-text dark:text-white mb-2 font-body";
  const errorClass = "mt-1.5 text-xs text-red-500 dark:text-red-400 font-body";

  return (
    <div className="relative">
      <Toaster position="top-right" richColors />

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Formulario de solicitud de consulta"
        className="space-y-6"
      >
        {/* Personal info row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>
              Nombre completo <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Dr. paciente apellido"
              className={`${inputClass} ${errors.name ? "border-red-400 focus:ring-red-400/50" : ""}`}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className={errorClass} role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Teléfono <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+52 81 0000 0000"
              className={`${inputClass} ${errors.phone ? "border-red-400 focus:ring-red-400/50" : ""}`}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone && (
              <p id="phone-error" className={errorClass} role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="correo@ejemplo.com"
            className={`${inputClass} ${errors.email ? "border-red-400 focus:ring-red-400/50" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Consult Type */}
        <div>
          <label htmlFor="consultType" className={labelClass}>
            Tipo de consulta <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="consultType"
            className={`${inputClass} cursor-pointer ${errors.consultType ? "border-red-400 focus:ring-red-400/50" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.consultType}
            aria-describedby={errors.consultType ? "consultType-error" : undefined}
            {...register("consultType")}
          >
            <option value="">Seleccione el motivo de su visita...</option>
            {consultTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label} — {type.description}
              </option>
            ))}
          </select>
          {errors.consultType && (
            <p id="consultType-error" className={errorClass} role="alert">
              {errors.consultType.message}
            </p>
          )}
        </div>

        {/* Body part */}
        <div>
          <label htmlFor="bodyPart" className={labelClass}>
            ¿Qué zona le duele o le preocupa? <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="bodyPart"
            className={`${inputClass} cursor-pointer ${errors.bodyPart ? "border-red-400 focus:ring-red-400/50" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.bodyPart}
            aria-describedby={errors.bodyPart ? "bodyPart-error" : undefined}
            {...register("bodyPart")}
          >
            <option value="">Seleccione la zona afectada...</option>
            {bodyParts.map((group) => (
              <optgroup key={group.group} label={`── ${group.group}`}>
                {group.parts.map((part) => (
                  <option key={part.value} value={part.value}>
                    {part.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {errors.bodyPart && (
            <p id="bodyPart-error" className={errorClass} role="alert">
              {errors.bodyPart.message}
            </p>
          )}
        </div>

        {/* Symptoms */}
        <div>
          <label htmlFor="description" className={labelClass}>
            Describa brevemente sus síntomas o motivo{" "}
            <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Ej: Tengo dolor en la espalda baja desde hace 3 meses, se irradia hacia la pierna derecha. Ya tomé ibuprofeno sin mucha mejoría..."
            className={`${inputClass} resize-y min-h-[100px] ${errors.description ? "border-red-400 focus:ring-red-400/50" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? "description-error" : undefined}
            {...register("description")}
          />
          {errors.description && (
            <p id="description-error" className={errorClass} role="alert">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Has studies checkbox */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-surface dark:bg-dark-card border border-border dark:border-dark-border">
          <input
            id="hasStudies"
            type="checkbox"
            className="mt-0.5 w-5 h-5 rounded accent-primary cursor-pointer flex-shrink-0"
            {...register("hasStudies")}
          />
          <label htmlFor="hasStudies" className="cursor-pointer">
            <span className="text-sm font-semibold text-text dark:text-white font-body block">
              Ya cuento con estudios médicos (radiografías, resonancias, tomografías)
            </span>
            <span className="text-xs text-text-muted dark:text-slate-400 font-body mt-0.5 block">
              Si tiene estudios previos, puede adjuntarlos para que el Dr. Hernández los revise con anticipación
            </span>
          </label>
        </div>

        {/* File upload — conditional */}
        {hasStudies && (
          <div>
            <p className={labelClass}>
              Adjuntar estudios médicos
            </p>

            {/* DICOM info */}
            <div className="mb-4 flex gap-3 p-4 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/15">
              <span className="text-xl flex-shrink-0">🩻</span>
              <div>
                <p className="text-sm font-semibold text-primary font-body mb-1">
                  {allowedFileTypes.info.title}
                </p>
                <p className="text-xs text-text-muted dark:text-slate-400 font-body leading-relaxed">
                  {allowedFileTypes.info.dicomNote}
                </p>
                <p className="text-xs text-text-muted dark:text-slate-400 font-body mt-1 leading-relaxed">
                  {allowedFileTypes.info.generalNote}
                </p>
                <p className="text-xs text-text-subtle dark:text-slate-500 font-body mt-2">
                  Formatos: {ALLOWED_EXTS.join(", ")} · Máx. {MAX_MB} MB por archivo · Máx. {MAX_FILES} archivos
                </p>
              </div>
            </div>

            {/* Drop zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              aria-label="Zona de carga de archivos. Haga clic o arrastre archivos aquí"
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click(); }}
              className={`relative flex flex-col items-center justify-center gap-3 w-full min-h-[140px] rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 text-center p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                ${isDragging
                  ? "border-primary bg-primary/5 dark:bg-primary/10 scale-[1.01]"
                  : "border-border dark:border-dark-border hover:border-primary/50 bg-surface dark:bg-dark-card hover:bg-primary/3"
                }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${isDragging ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-text dark:text-white font-body">
                  {isDragging ? "Suelte los archivos aquí" : "Arrastre sus archivos aquí"}
                </p>
                <p className="text-xs text-text-muted dark:text-slate-400 font-body">
                  o <span className="text-primary underline underline-offset-2">haga clic para seleccionar</span>
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={ALLOWED_EXTS.join(",")}
                className="sr-only"
                aria-hidden="true"
                onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }}
              />
            </div>

            {/* File list */}
            {uploadedFiles.length > 0 && (
              <ul className="mt-3 space-y-2" aria-label="Archivos seleccionados">
                {uploadedFiles.map(({ file, id, error }) => (
                  <li
                    key={id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border font-body text-sm ${
                      error
                        ? "border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700"
                        : "border-border dark:border-dark-border bg-white dark:bg-dark-card"
                    }`}
                  >
                    <span className="text-xl flex-shrink-0" aria-hidden="true">
                      {getFileIcon(file.name)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`truncate text-sm font-medium ${error ? "text-red-600 dark:text-red-400" : "text-text dark:text-white"}`}>
                        {file.name}
                      </p>
                      {error ? (
                        <p className="text-xs text-red-500 dark:text-red-400" role="alert">{error}</p>
                      ) : (
                        <p className="text-xs text-text-muted dark:text-slate-400">{formatBytes(file.size)}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(id)}
                      aria-label={`Eliminar archivo ${file.name}`}
                      className="flex-shrink-0 w-7 h-7 rounded-full hover:bg-red-100 dark:hover:bg-red-900/40 flex items-center justify-center text-text-muted hover:text-red-500 transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Contact preference */}
        <div>
          <p className={labelClass}>
            Prefiero que me contacten por{" "}
            <span className="text-red-500" aria-hidden="true">*</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Preferencia de contacto">
            {contactPreferences.map((pref) => (
              <label
                key={pref.value}
                className="relative flex items-center gap-3 px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-white dark:bg-dark-card cursor-pointer hover:border-primary/50 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10"
              >
                <input
                  type="radio"
                  value={pref.value}
                  className="accent-primary"
                  aria-label={pref.label}
                  {...register("contactPreference")}
                />
                <span className="text-sm font-body text-text dark:text-white">{pref.label}</span>
              </label>
            ))}
          </div>
          {errors.contactPreference && (
            <p className={errorClass} role="alert">
              {errors.contactPreference.message}
            </p>
          )}
        </div>

        {/* Privacy note */}
        <p className="text-xs text-text-muted dark:text-slate-500 font-body leading-relaxed">
          🔒 Su información es confidencial y solo será utilizada para gestionar su solicitud de consulta médica. No compartimos datos con terceros.
        </p>

        {/* Submit */}
        <button
          type="submit"
          id="contact-form-submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-primary font-body text-sm"
          aria-live="polite"
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando solicitud...
            </>
          ) : (
            <>
              Enviar Solicitud de Consulta
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
