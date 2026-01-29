import {
  Phone,
  Mail,
  Clock,
  Sparkles,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const Contact = () => {
  const circleStyle =
    "relative flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300";
  const rippleEffect =
    "absolute inset-0 rounded-full bg-white opacity-0 animate-ping group-hover:opacity-20";

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 p-4 mt-[75px] lg:p-0"data-aos="fade-right">
      <div className="flex w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[500px]">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0f172a] p-12 flex-col justify-between overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <Sparkles size={16} className="text-orange-400" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                24/7 Priority Concierge
              </span>
            </div>
          </div>

          <div className="relative z-10 space-y-8">
            <h1 className="text-5xl font-black text-white leading-[1.1]">
              We’re here to <br />
              <span className="text-orange-500">Elevate</span> your <br />
              Experience.
            </h1>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-sm">
                <Headphones className="text-orange-400 mb-3" size={28} />
                <p className="text-2xl font-bold text-white">Instant</p>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-tighter">
                  Response Time
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-sm">
                <ShieldCheck className="text-green-400 mb-3" size={28} />
                <p className="text-2xl font-bold text-white">Secure</p>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-tighter">
                  Data Handling
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-l-2 border-orange-500 pl-6 italic text-slate-300 text-sm">
            "Exceptional service is not an act, it is a habit."
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-slate-50/50 md:mt-[-30px]">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div
              className="p-8 text-center"
              style={{ backgroundColor: "#121212" }}
            >
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              <p className="text-sm text-slate-300 mt-1">
                Our support team is ready to help
              </p>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Toll Free
                  </p>
                  <p className="text-slate-800 font-bold">9284548505</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Working Hours
                  </p>
                  <p className="text-slate-800 font-bold text-sm">
                    9:30 AM to 6:30 PM (Mon-Sun)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Official Email
                  </p>
                  <p className="text-slate-800 font-bold">
                    feedback@estateflow.com
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-700 mb-4 text-center">
                  Connect With Us
                </p>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://www.facebook.com/"
                    className={`${circleStyle} bg-[#3b5998] hover:shadow-[0_0_20px_rgba(59,89,152,0.4)] scale-90`}
                  >
                    <i className="fa-brands fa-facebook-f text-base"></i>
                    <span className={rippleEffect}></span>
                  </a>

                  <a
                    href="https://x.com/"
                    className={`${circleStyle} bg-black border border-zinc-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-90`}
                  >
                    <i className="fa-brands fa-x-twitter text-base"></i>
                    <span className={rippleEffect}></span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nikhil-thakur-9195282b7/"
                    className={`${circleStyle} bg-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] scale-90`}
                  >
                    <i className="fa-brands fa-linkedin-in text-base"></i>
                    <span className={rippleEffect}></span>
                  </a>

                  <a
                    href="https://www.youtube.com/embed/VKAKbueezMk?si=h8OP3mchF_iId1pP"
                    className={`${circleStyle} bg-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] scale-90`}
                  >
                    <i className="fa-brands fa-youtube text-base"></i>
                    <span className={rippleEffect}></span>
                  </a>

                  <a
                    href="https://www.instagram.com/nikhil_Thakur_Patil"
                    className={`${circleStyle} bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:shadow-[0_0_20px_rgba(238,42,123,0.4)] scale-90`}
                  >
                    <i className="fa-brands fa-instagram text-base"></i>
                    <span className={rippleEffect}></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
