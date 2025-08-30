import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <h1>Projeto Geren</h1>
      <p class="subtitle">Sistema de Gerência de Configuração</p>
    </header>
    
    <main class="main-content">
      <div class="card">
        <h2>Bem-vindo ao Sistema</h2>
        <p>Este é o projeto de gerência de configuração. Use este sistema para gerenciar suas configurações de forma eficiente.</p>
        
        <div class="features">
          <div class="feature-item">
            <h3>📋 Configurações</h3>
            <p>Gerencie todas as suas configurações em um local centralizado</p>
          </div>
          
          <div class="feature-item">
            <h3>🔧 Ferramentas</h3>
            <p>Acesse ferramentas avançadas para otimizar seu workflow</p>
          </div>
          
          <div class="feature-item">
            <h3>📊 Relatórios</h3>
            <p>Visualize relatórios detalhados sobre suas configurações</p>
          </div>
        </div>
        
        <button class="cta-button" onclick="alert('Sistema em desenvolvimento!')">
          Começar Agora
        </button>
      </div>
    </main>
  </div>
`