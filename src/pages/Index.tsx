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

    emailjs.send(
      'service_n92bxgn',
      'template_2cngbxm',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      '24wa6cv2jWUoQEuWU'
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
      <section id="hero" className="relative bg-gradient-to-br from-atrakta-navy via-atrakta-navy to-blue-900 text-white py-20 md:py-32 overflow-hidden mt-16">
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
              Fale com um especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Problema do Cliente */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-16 text-atrakta-navy">
              Reconhece alguma dessas situações?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {["Você anuncia, mas não vê resultado?", "Está atraindo cliques, mas não gera vendas?", "Investe sem saber o que funciona?", "Nunca anunciou e está ficando para trás?"].map((text, i) => (
                <div key={i} className="text-lg text-gray-700">{text}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-atrakta-navy mb-8">A Solução Atrakta</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[{ icon: Target, title: "Planejamento", text: "Campanhas pensadas para o seu negócio." }, { icon: TrendingUp, title: "Performance", text: "Foco em resultado e ROI positivo." }, { icon: BarChart3, title: "Dados", text: "Otimizações com base em números reais." }, { icon: Users, title: "Suporte", text: "Acompanhamento próximo e transparente." }].map(({ icon: Icon, title, text }, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="py-6">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-atrakta-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-atrakta-navy mb-12">O que dizem nossos clientes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Resultado em tempo recorde! A Atrakta realmente entregou o que prometeu.", "Campanhas bem estruturadas e atendimento de primeira.", "Tivemos mais leads com menos investimento. Surpreendente!"].map((text, i) => (
                <Card key={i} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400" />)}
                    </div>
                    <p className="text-gray-700 italic">"{text}"</p>
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
            <h2 className="text-4xl font-bold text-center mb-4">Vamos atrair resultados juntos?</h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Deixe seus dados e descubra como podemos turbinar seus resultados.
            </p>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <Input
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <InputMask
                    mask="(99) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  >
                    {(inputProps) => (
                      <Input
                        {...inputProps}
                        type="tel"
                        placeholder="Seu telefone com WhatsApp"
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                      />
                    )}
                  </InputMask>
                  <Textarea
                    placeholder="Conte em poucas palavras onde sua empresa precisa melhorar..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 min-h-[120px]"
                  />
                  <Button type="submit" className="w-full bg-atrakta-orange hover:bg-orange-600">
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
            <div className="mb-6 md:mb-0">
              <img src="/logo-atrakta.png" alt="Logo Atrakta" className="h-10 mb-2" />
              <p className="text-gray-300">Tráfego que Atrai</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-atrakta-orange">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-atrakta-orange">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">Política de Privacidade</a>
            </div>
            <p className="mt-4">&copy; 2024 Atrakta. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botões Fixos */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-atrakta-navy hover:bg-blue-900 text-white w-12 h-12 rounded-full shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
