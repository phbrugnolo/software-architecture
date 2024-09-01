# Exercício 1: Identificação de Características

## Principais Características da Arquitetura Monolítica
- **Unidade Integrada**: A aplicação é desenvolvida como uma única unidade funcional, onde todos os componentes — como interface de usuário, lógica de negócios e acesso a dados — estão interligados dentro de um único código-base.

- **Interdependência**: Modificações em uma parte do código podem impactar outras partes, o que pode requerer a recompilação e redistribuição de toda a aplicação. Todos os componentes são altamente acoplados, o que significa que dependem fortemente uns dos outros.

## Influência dessas Características na Manutenção e Escalabilidade

- **Complexidade e Acoplamento**: À medida que a aplicação cresce, o código tende a se tornar mais complexo e difícil de manter. O alto acoplamento entre os componentes significa que mudanças em um módulo podem ter efeitos colaterais em outros, aumentando o risco de introduzir erros e bugs. Essa interdependência torna a implementação de novas funcionalidades ou a correção de problemas mais demorada e arriscada, pois é necessário entender como cada parte do sistema está interligada.
- **Resistência a Mudanças**: Como todas as partes da aplicação estão fortemente conectadas, qualquer alteração pode necessitar de testes extensivos e atualizações em várias partes do sistema. Isso pode resultar em uma manutenção mais lenta e custosa, especialmente em aplicações maiores ou mais antigas.
Escalabilidade:
- **Dificuldade de Escalabilidade**: Em uma arquitetura monolítica, a aplicação precisa ser escalada como um todo, mesmo que apenas um componente ou módulo específico esteja enfrentando problemas de desempenho. Isso pode levar a uma utilização ineficiente de recursos, uma vez que é necessário provisionar capacidade adicional para toda a aplicação, em vez de escalar apenas a parte que realmente precisa.
- **Implantação e Atualização**: A implantação de mudanças ou atualizações requer a distribuição de toda a aplicação, o que pode causar tempo de inatividade. Esse processo pode se tornar uma limitação significativa para a escalabilidade, especialmente em ambientes onde o tempo de atividade contínuo é crítico. Além disso, a necessidade de testar a aplicação inteira para qualquer modificação pode desacelerar a capacidade de resposta às demandas de escalabilidade.

# Exercício 3: Vantagens e Desvantagens

| **Vantagem**                     | **Exemplo Prático**                                                                                                                                       |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Simplicidade Inicial**         | Em uma startup desenvolvendo um aplicativo de gerenciamento de tarefas, a equipe pode rapidamente criar uma versão funcional do produto com um monólito. Como todos os componentes estão integrados, há menos sobrecarga inicial com configuração, e a equipe pode se concentrar na entrega rápida de valor aos usuários.                                                    |
| **Facilidade de Desenvolvimento**| Uma pequena empresa de software que desenvolve um sistema de vendas interno pode se beneficiar de uma arquitetura monolítica porque os desenvolvedores trabalham em um único ambiente, permitindo uma comunicação direta e reduzindo a complexidade de sincronização entre diferentes partes do sistema. Isto facilita a colaboração e a entrega de funcionalidades rapidamente.  |

| **Desvantagem**                  | **Exemplo Prático**                                                                                                                                       |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Dificuldade de Escalabilidade**| Uma aplicação de e-commerce que começa a crescer rapidamente pode enfrentar problemas de desempenho, pois toda a aplicação precisa ser escalada como um todo. Mesmo que apenas o módulo de carrinho de compras esteja sobrecarregado, a empresa deve provisionar recursos para toda a aplicação, levando a custos desnecessários e desperdício de recursos.                                |
| **Complexidade e Acoplamento**   | Uma aplicação financeira monolítica que tem vários módulos interdependentes (como contabilidade, relatórios, e gestão de clientes) pode se tornar difícil de manter. Se um desenvolvedor fizer uma alteração no módulo de contabilidade, ele pode inadvertidamente introduzir um bug nos relatórios, resultando em dificuldades de depuração e aumento no tempo de desenvolvimento para implementar novas funcionalidades. |


# Exercício 4: Estudo de Caso

## Benefícios da Arquitetura Distribuída

- **Escalabilidade**:
  - **Horizontal**: Adicionar mais servidores para lidar com picos de tráfego.
  - **Vertical**: Adicionar mais recursos (CPU, memória) aos servidores.

- **Alta Disponibilidade e Resiliência**:
  - **Redundância e Tolerância a Falhas**: Cada componente opera de forma independente, evitando falhas globais.
  - **Distribuição Geográfica**: Reduz latência e aumenta a resiliência.

## Implementação de Microsserviços

### Divisão da Aplicação em Serviços Independentes:

1. **Serviço de Catálogo de Produtos**: Gerencia e serve informações dos produtos.
2. **Serviço de Carrinho de Compras**: Lida com adições e remoções no carrinho.
3. **Serviço de Processamento de Pagamentos**: Gerencia transações e integrações de pagamento.
4. **Serviço de Recomendação**: Oferece sugestões personalizadas aos usuários.
5. **Serviço de Inventário**: Gerencia e atualiza o estoque.

### Comunicação entre Microsserviços:

- **APIs RESTful**: Comunicação síncrona via HTTP.
- **Mensageria Assíncrona**: Filas e tópicos (ex.: RabbitMQ, Kafka) para comunicação não imediata.
- **gRPC ou Protobufs**: Protocolos binários para alta performance e baixa latência.

### Outros Componentes de Suporte:

- **Gateway de API**: Gerencia a entrada única de requisições.
- **Service Discovery**: Ferramentas para descoberta dinâmica de serviços.
- **Gerenciamento de Configuração Centralizado**: Configurações consistentes para todos os serviços.
- **Observabilidade**: Ferramentas para monitoramento, logging e tracing.

## Estratégia de Implementação e Migração

1. **Identificar Domínios de Negócio**: Começar com serviços menos críticos.
2. **Refatorar e Extrair Serviços**: Criar serviços independentes a partir do monólito.
3. **Estabelecer CI/CD**: Automação de testes e deploy.
4. **Gerenciamento de Dados**: Desnormalização e sincronização via eventos.
5. **Monitoramento e Observabilidade**: Implementar desde o início.
6. **Iteração e Melhoria Contínua**: Revisar e ajustar a arquitetura continuamente.

# Exercício 5: Projeto e Análise de Arquitetura Multicamadas

## 1. Desenho da Arquitetura

### a. Camada de Apresentação (Front-End)
- **Propósito:** Interface do usuário para interações, como busca e empréstimo de livros.
- **Interação:** Comunica-se com a camada de lógica de negócios via APIs.
- **Tecnologias:** React, Angular, Vue.js, HTML, CSS, JavaScript.

### b. Camada de Lógica de Negócios (Back-End)
- **Propósito:** Gerencia regras de negócios e lógica de aplicação.
- **Interação:** Conecta a camada de apresentação com a camada de dados, expondo APIs.
- **Tecnologias:** Ruby on Rails, Django, Spring Boot, Express.js, RESTful APIs, GraphQL, JWT.

### c. Camada de Dados (Banco de Dados)
- **Propósito:** Armazenamento e recuperação de dados.
- **Interação:** Recebe e envia dados para a camada de lógica de negócios.
- **Tecnologias:** PostgreSQL, MySQL, MongoDB, ORM (ActiveRecord, Hibernate, Sequelize).

## 2. Vantagens da Arquitetura

### a. Separação de Preocupações
- **Manutenção:** Modificações em uma camada não afetam as outras.
- **Escalabilidade:** Cada camada pode ser escalada independentemente.

### b. Reutilização de Código
- **Manutenção:** Reduz duplicação, facilitando atualizações.
- **Escalabilidade:** Permite o uso de APIs reutilizáveis em diferentes interfaces.

## 3. Desafios e Soluções

### a. Latência e Performance
- **Desafio:** Aumento da latência devido à comunicação entre camadas.
- **Solução:** Caching, otimização de consultas e balanceamento de carga.

### b. Complexidade de Integração
- **Desafio:** Garantir comunicação correta entre as camadas.
- **Solução:** Testes automatizados, logging, monitoramento e uso de API gateways.
