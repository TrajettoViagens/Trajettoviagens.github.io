/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageCircle, Compass, Plane } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden font-sans bg-[#02497a]">
      {/* Top Header with Solid Background and Plane Image */}
      <div className="w-full md:max-w-md h-48 relative flex items-center justify-center bg-[#02497a]">
        {/* Background Plane Image */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <img 
            src="https://i.imgur.com/VqCGtRm.png" 
            alt="Background Plane" 
            /* 
               Alterações feitas para aumentar a imagem:
               1. 'w-full h-auto': Faz a imagem ocupar toda a largura disponível.
               2. 'scale-125': Aumenta o tamanho da imagem em 25% para ela ficar maior.
               3. 'translate-y-4': Ajusta levemente a posição para baixo para centralizar melhor o avião.
               4. 'md:scale-150': Em telas maiores (computador), ela fica ainda maior se necessário.
            */
            className="w-full h-auto object-contain scale-125 translate-y-4 md:scale-150 md:translate-y-0"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Overlapping Circular Icon */}
        <div className="absolute -bottom-[92px] md:-bottom-[72px] left-1/2 -translate-x-1/2 z-20">
          <div className="w-36 h-36 md:w-28 md:h-28 bg-trajetto-beige rounded-full p-1.5 shadow-md flex items-center justify-center border-4 border-trajetto-blue-dark">
            <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.imgur.com/3Vf8lDS.png" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="z-10 w-full max-w-md flex flex-col items-center flex-1 mt-12">
        
        {/* Rounded Content Panel */}
        <main 
          className="bg-trajetto-beige w-full rounded-t-[30px] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col items-center p-8 pt-16 border-none flex-1"
        >
          {/* Logo Image Section */}
          <div className="text-center mb-3">
            <img 
              src="https://i.imgur.com/KeaCHgH.png" 
              alt="Trajetto Logo" 
              className="h-8 md:h-6 object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-[9px] tracking-wide text-trajetto-blue-dark/80 font-medium mt-1">
              Agência de viagens
            </p>
          </div>

          {/* About Us Section */}
          <div className="w-full mt-3 mb-10">
            <div className="w-full h-px bg-trajetto-blue-dark/10 mb-6"></div>
            <div className="bg-trajetto-blue-dark text-white px-4 py-1.5 inline-block rounded-lg mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider">Sobre nós</h2>
            </div>
            <p className="text-trajetto-blue-dark text-[13px] leading-[1.4] text-justify font-medium">
              Na TraJetto, acreditamos que toda grande viagem começa com a escolha certa. Por isso, oferecemos agilidade, confiança e um atendimento humano na hora de comprar suas passagens.
            </p>
            <p className="text-trajetto-blue-dark text-[13px] leading-[1.4] text-justify font-medium mt-1">
              Conectamos você ao seu próximo destino com praticidade e cuidado em cada detalhe, porque viajar bem começa desde o primeiro clique.
            </p>
            <div className="w-full h-px bg-trajetto-blue-dark/10 mt-6"></div>
          </div>

          {/* Interaction Buttons */}
          <div className="w-full space-y-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-trajetto-blue-dark text-white w-full py-4 rounded-lg text-sm font-bold shadow-lg hover:bg-trajetto-blue-dark/90"
            >
              <MessageCircle className="w-5 h-5" />
              Whatsapp
            </a>

            <a
              href="https://www.instagram.com/trajettoviagens?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-trajetto-blue-dark text-white w-full py-4 rounded-lg text-sm font-bold shadow-lg hover:bg-trajetto-blue-dark/90"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>

          {/* Footer CTA */}
          <p className="mt-8 text-gray-400 text-[10px] font-medium tracking-widest">
            Clique nos ícones para interagir
          </p>
        </main>
      </div>
    </div>
  );
}
