import { Phone, MessageCircle } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";
import { SiteSettings } from "@/lib/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  const whatsappUrl = settings.whatsapp
    ? `https://wa.me/${settings.whatsapp}`
    : null;
  // Fall back to the WhatsApp number if no separate phone number set
  const telNumber = settings.phone || (settings.whatsapp ? `+${settings.whatsapp}` : null);

  return (
    <footer id="contact" className="bg-black border-t border-cinema-accent/20 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <p className="font-serif text-3xl text-white mb-2">
            {settings.name.toUpperCase()}
          </p>
          <p className="text-cinema-accent text-sm tracking-widest uppercase">
            Cinematographer
          </p>
        </div>

        <div className="flex items-center gap-8">
          {settings.socials.instagram && settings.socials.instagram !== "#" && (
            <a
              href={settings.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              aria-label="Instagram"
            >
              <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
                <InstagramIcon />
              </div>
            </a>
          )}
          {settings.socials.youtube && settings.socials.youtube !== "#" && (
            <a
              href={settings.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              aria-label="YouTube"
            >
              <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
                <YoutubeIcon />
              </div>
            </a>
          )}
          {settings.socials.linkedin && settings.socials.linkedin !== "#" && (
            <a
              href={settings.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              aria-label="LinkedIn"
            >
              <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
                <LinkedinIcon />
              </div>
            </a>
          )}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              aria-label="WhatsApp"
            >
              <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </div>
            </a>
          )}
          {telNumber && (
            <a
              href={`tel:${telNumber.replace(/\s/g, "")}`}
              className="group flex flex-col items-center gap-2"
              aria-label="Call"
            >
              <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
            </a>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
        <p>
          &copy; {new Date().getFullYear()} {settings.name}. All rights
          reserved.
        </p>
        <p>Based in {settings.location}</p>
      </div>
    </footer>
  );
}
