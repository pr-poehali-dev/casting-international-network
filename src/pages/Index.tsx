import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Film" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-gradient">Кастинг №1</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#contests" className="text-sm hover:text-primary transition-colors">Конкурсы</a>
            <a href="#education" className="text-sm hover:text-primary transition-colors">Обучение</a>
            <a href="#voting" className="text-sm hover:text-primary transition-colors">Голосование</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#agencies" className="text-sm hover:text-primary transition-colors">Агентствам</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Войти
            <Icon name="User" size={18} className="ml-2" />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm animate-fade-in">
            Международная платформа для актёров
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Твой путь к большому экрану
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Международное сообщество, которое помогает актерам получить роли и стать знаменитыми. 
            Обучение + конкурс + реальные роли в кино.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Начать карьеру
              <Icon name="Star" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
              Узнать больше
              <Icon name="Play" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contests" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className={`text-center mb-16 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Текущие конкурсы</h2>
            <p className="text-lg text-muted-foreground">Выбери свой путь к славе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Драматический актёр", roles: 5, participants: 234, deadline: "30 дней", icon: "Drama" },
              { title: "Комедийный талант", roles: 3, participants: 189, deadline: "45 дней", icon: "Laugh" },
              { title: "Мюзикл 2025", roles: 8, participants: 312, deadline: "60 дней", icon: "Music" }
            ].map((contest, idx) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
              <Card key={idx} ref={ref as any} className={`hover-scale bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all animate-on-scroll ${isVisible ? 'is-visible' : ''} animate-on-scroll-delay-${idx + 1}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={contest.icon as any} className="text-primary" size={32} />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      Активен
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{contest.title}</CardTitle>
                  <CardDescription className="text-base">
                    {contest.roles} главных ролей + эпизоды
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Users" size={16} className="text-muted-foreground" />
                      <span>{contest.participants} участников</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>Осталось {contest.deadline}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            );})}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center mb-16 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это происходит?</h2>
            <p className="text-lg text-muted-foreground">Полный цикл от обучения до получения роли</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className={`bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''} animate-on-scroll-delay-1`} ref={useScrollAnimation().ref as any}>
              <CardHeader>
                <div className="p-4 bg-primary/20 rounded-lg w-fit mb-4">
                  <Icon name="GraduationCap" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-3xl">Шаг 1: Обучение</CardTitle>
                <CardDescription className="text-base">2 месяца интенсивной подготовки (90 часов)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Актёрское мастерство — 50 часов",
                    "Сценическая речь — 40 часов",
                    "Работа с эмоциями и телом",
                    "Импровизация и анализ ролей",
                    "Подготовка к конкурсным заданиям"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className={`bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''} animate-on-scroll-delay-2`} ref={useScrollAnimation().ref as any}>
              <CardHeader>
                <div className="p-4 bg-secondary/20 rounded-lg w-fit mb-4">
                  <Icon name="ListChecks" size={40} className="text-secondary" />
                </div>
                <CardTitle className="text-3xl">Шаг 2: Задания</CardTitle>
                <CardDescription className="text-base">5 творческих заданий для демонстрации мастерства</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Монолог — драматическая сцена",
                    "Комедийный этюд",
                    "Работа с партнёром",
                    "Импровизация на заданную тему",
                    "Творческое задание от жюри"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="voting" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className={`text-center mb-16 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Шаг 3: Голосование и финал</h2>
            <p className="text-lg text-muted-foreground">Справедливый отбор лучших талантов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                step: "1", 
                title: "Голосование участников", 
                desc: "Каждый получает 3 голоса: 1 за себя и 2 за других конкурсантов",
                icon: "Vote",
                color: "primary"
              },
              { 
                step: "2", 
                title: "Отбор финалистов", 
                desc: "ТОП-50 участников с максимальным количеством голосов проходят в финал",
                icon: "Trophy",
                color: "secondary"
              },
              { 
                step: "3", 
                title: "Финальный концерт", 
                desc: "5 главных ролей + 20 эпизодических + 100 массовка",
                icon: "Star",
                color: "accent"
              }
            ].map((item, idx) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
              <Card key={idx} ref={ref as any} className={`bg-gradient-to-br from-${item.color}/10 to-${item.color}/5 border-${item.color}/30 hover-scale hover:border-${item.color}/50 transition-all animate-on-scroll ${isVisible ? 'is-visible' : ''} animate-on-scroll-delay-${idx + 1}`}>
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 bg-${item.color}/20 rounded-full flex items-center justify-center text-3xl font-bold text-${item.color}`}>
                      {item.step}
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <Icon name={item.icon as any} size={48} className={`text-${item.color} mx-auto mb-4`} />
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.desc}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );})}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center mb-16 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость участия</h2>
            <p className="text-lg text-muted-foreground">Оплата подтверждает, что вы не робот</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Один конкурс",
                price: "8,000₽",
                period: "4 месяца",
                features: [
                  "Обучение 90 часов (2 месяца)",
                  "5 конкурсных заданий",
                  "Право голосования",
                  "Шанс попасть в ТОП-50",
                  "Доступ к платформе на 4 месяца"
                ],
                popular: false,
                gradient: "from-muted/50 to-muted/30"
              },
              {
                title: "Два конкурса",
                price: "6,000₽",
                period: "8 месяцев",
                features: [
                  "Участие в 2 конкурсах",
                  "Расширенная программа обучения",
                  "Больше шансов на победу",
                  "10 конкурсных заданий",
                  "Приоритетная поддержка"
                ],
                popular: true,
                gradient: "from-primary/20 to-primary/10",
                badge: "Выгодно"
              },
              {
                title: "Годовой пакет",
                price: "10,000₽",
                period: "12 месяцев",
                features: [
                  "Все конкурсы года",
                  "Безлимитное обучение",
                  "VIP поддержка",
                  "Персональные консультации",
                  "Максимум возможностей для карьеры"
                ],
                popular: false,
                gradient: "from-secondary/20 to-secondary/10"
              }
            ].map((plan, idx) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
              <Card key={idx} ref={ref as any} className={`relative hover-scale bg-gradient-to-br ${plan.gradient} border-border/50 hover:border-primary/50 transition-all animate-on-scroll ${isVisible ? 'is-visible' : ''} animate-on-scroll-delay-${idx + 1}`}>
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl mb-2">{plan.title}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription className="text-base">{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}>
                    Оплатить участие
                  </Button>
                </CardContent>
              </Card>
            );})}
          </div>
          <div className={`mt-12 text-center animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
            <Card className="bg-accent/10 border-accent/30 max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Icon name="Globe" size={32} className="text-accent" />
                  <CardTitle className="text-2xl">Оплата сайта</CardTitle>
                </div>
                <p className="text-lg mb-2"><span className="text-3xl font-bold text-accent">2,000₽</span> / год</p>
                <p className="text-muted-foreground">Доступ к платформе, чату и всем функциям сообщества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="agencies" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className={`text-center mb-16 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Для кастинг-агентств</h2>
            <p className="text-lg text-muted-foreground">Зарабатывайте с партнёрской программой</p>
          </div>
          <Card className={`bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
            <CardHeader className="text-center">
              <div className="p-4 bg-accent/20 rounded-lg w-fit mx-auto mb-4">
                <Icon name="Handshake" size={48} className="text-accent" />
              </div>
              <CardTitle className="text-3xl mb-4">20% комиссия с каждого участника</CardTitle>
              <CardDescription className="text-base max-w-2xl">
                Рекламируйте нашу платформу и получайте 20% от стоимости подписки за каждого приведённого участника. 
                При повторной регистрации участника вы также получаете 20%.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-background/50 rounded-lg border border-accent/20">
                  <Icon name="UserPlus" size={32} className="text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">За привлечение</h3>
                  <p className="text-sm text-muted-foreground mb-3">20% от первого платежа нового участника</p>
                  <p className="text-2xl font-bold text-accent">До 2,000₽</p>
                  <p className="text-xs text-muted-foreground">с одного участника</p>
                </div>
                <div className="p-6 bg-background/50 rounded-lg border border-accent/20">
                  <Icon name="RefreshCw" size={32} className="text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Повторная оплата</h3>
                  <p className="text-sm text-muted-foreground mb-3">20% при продлении участником подписки</p>
                  <p className="text-2xl font-bold text-accent">До 2,000₽</p>
                  <p className="text-xs text-muted-foreground">снова и снова</p>
                </div>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/20 mb-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Calculator" size={20} className="text-primary" />
                  Пример дохода
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>10 участников × 8,000₽</span>
                    <span className="font-bold">16,000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>25 участников (средний чек 8,000₽)</span>
                    <span className="font-bold">40,000₽</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <span>50 участников (годовые пакеты)</span>
                    <span className="font-bold text-accent text-lg">100,000₽</span>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Стать партнёром
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className={`container mx-auto max-w-3xl text-center animate-on-scroll ${useScrollAnimation().isVisible ? 'is-visible' : ''}`} ref={useScrollAnimation().ref as any}>
          <Icon name="MessageCircle" size={64} className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Встроенный мессенджер</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Общайтесь с другими участниками, делитесь опытом и получайте поддержку от сообщества. 
            Функционал как в WhatsApp и Telegram — всё прямо на платформе.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Icon name="Send" size={16} className="mr-2" />
              Мгновенные сообщения
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Icon name="Users" size={16} className="mr-2" />
              Групповые чаты
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Icon name="Paperclip" size={16} className="mr-2" />
              Обмен файлами
            </Badge>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Film" className="text-primary" size={28} />
              <span className="text-xl font-bold text-gradient">Кастинг №1</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Кастинг №1. Международное актёрское сообщество.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;