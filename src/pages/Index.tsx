import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Users, 
  MessageCircle,
  Instagram,
  Linkedin,
  Star,
  ArrowUp
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
emailjs.init("24wa6cv2jWUoQEuWU"); // sua public key

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
  const contactRef = useRef<HTMLElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.emailjs.send(
      'service_n92bxgn',
      'template_2cngbxm',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }
    ).then(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo seu contato.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }).catch((error) => {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
      console.error('Erro no envio:', error);
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Oi! Estou buscando uma agência que realmente ajude a turbinar meu negócio. A Atrakta pode me ajudar?");
    window.open(`https://wa.me/5511972359617?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header onContactClick={scrollToContact} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-atrakta-navy via-atrakta-navy to-blue-900 text-white py-20 md:py-32 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforme Cliques em 
              <span className="text-atrakta-orange"> Conversões</span> com o Poder do Google Ads
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed">
              Estratégias sob medida para atrair, impactar e converter o público certo.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-atrakta-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Quero turbinar minha empresa
            </Button>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-atrakta-orange/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Reconhece Situações */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-atrakta-navy mb-6">
              Reconhece alguma dessas situações?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700 text-lg">
              <div className="flex items-center gap-4">
                <Target className="text-atrakta-navy mt-1" size={32} />
                <span>Você anuncia, mas não vê resultado?</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="text-atrakta-navy mt-1" size={32} />
                <span>Está atraindo cliques, mas não gera vendas?</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="text-atrakta-navy mt-1" size={32} />
                <span>Investe sem saber o que funciona?</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="text-atrakta-navy mt-1" size={32} />
                <span>Nunca anunciou e está ficando para trás?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução ATRAKTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-4 text-atrakta-navy">
              A Solução ATRAKTA
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Metodologia comprovada para transformar seu investimento em resultados reais
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Estratégia Personalizada",
                  description: "Análise profunda do seu negócio para criar campanhas sob medida"
                },
                {
                  icon: BarChart3,
                  title: "Gestão Completa no Google Ads",
                  description: "Configuração, otimização e monitoramento 24/7 das suas campanhas"
                },
                {
                  icon: TrendingUp,
                  title: "Otimizações com Base em Dados",
                  description: "Decisões estratégicas baseadas em métricas e performance real"
                },
                {
                  icon: Users,
                  title: "Acompanhamento de Performance",
                  description: "Relatórios detalhados e reuniões regulares de resultados"
                }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-atrakta-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-poppins text-xl font-semibold mb-3 text-atrakta-navy">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-16 text-atrakta-navy">
              O que nossos clientes dizem
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "Triplicamos nossos leads em menos de 2 meses. A Atrakta foi além da expectativa!",
                  author: "Mariana Costa",
                  role: "Diretora de Marketing",
                  company: "VittaFit Suplementos"
                },
                {
                  text: "Campanhas otimizadas, suporte ágil e resultados mensuráveis. Recomendamos fortemente.",
                  author: "João Almeida",
                  role: "CEO",
                  company: "Conecta Cursos"
                },
                {
                  text: "Finalmente encontramos uma agência que entrega tráfego com propósito. Viramos cliente fixo.",
                  author: "André Silva",
                  role: "Sócio",
                  company: "Mob2Go Tecnologia"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-atrakta-navy">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-atrakta-orange font-medium">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" ref={contactRef} className="py-20 bg-atrakta-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-4">
              Vamos atrair resultados juntos?
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Conte com nossa equipe para turbinar sua presença digital e alcançar novos resultados
            </p>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-atrakta-orange"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-atrakta-orange"
                      required
                    />
                  </div>
                  <div>
                    <InputMask
                      mask="(99) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    >
                      {(inputProps) => (
                        <Input
                          {...inputProps}
                          placeholder="Seu telefone com WhatsApp"
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-atrakta-orange"
                          required
                        />
                      )}
                    </InputMask>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Como podemos turbinar sua empresa hoje?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-atrakta-orange min-h-[120px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-atrakta-orange hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Quero turbinar minha empresa
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-atrakta-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <img src="/lovable-uploads/LOGOSF.png" alt="Logo Atrakta" className="h-24 mb-2" />
              <p className="text-gray-300"></p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-atrakta-orange transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-atrakta-orange transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} Atrakta. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
