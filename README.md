
# **Matriz de Leontief Interativa**

Ferramenta interativa para análise da **Matriz de Leontief**, ideal para simulações econômicas e entendimento das interdependências entre setores como logística, varejo e encomendas. Este projeto foi desenvolvido com tecnologias web, proporcionando uma interface amigável e cálculos precisos baseados em modelos econômicos.

---

## 🚀 **Demonstração**

Acesse o projeto online:
- 🌐 **Ferramenta Interativa**: [GitHub Pages Link](https://seu-usuario.github.io/matriz-leontief/)

---

## 📖 **Sobre o Projeto**

A Matriz de Leontief é uma ferramenta poderosa para analisar como os setores econômicos estão interconectados. Este projeto permite:
- Inserir dados de setores econômicos (e.g., Logística, Varejo, Encomendas).
- Calcular a produção total necessária para atender à demanda final e ao consumo intermediário.
- Simular choques na demanda final e visualizar os impactos econômicos.

### **Funcionalidades**
1. Entrada dinâmica de nomes dos setores, matriz técnica e demanda final.
2. Cálculo automático de:
   - \((I - A)^{-1}\): Matriz inversa de Leontief.
   - \(X = (I - A)^{-1} \cdot Y\): Produção total necessária.
3. Observação gerada automaticamente para interpretar os resultados.

---

## 💻 **Tecnologias Utilizadas**
- **HTML**: Estrutura da interface.
- **CSS**: Estilização para uma experiência visual agradável.
- **JavaScript**: Lógica de interação e cálculos matemáticos.
- **Math.js**: Biblioteca para cálculos matriciais avançados.

---

## 🔧 **Como Usar**

1. **Acesse a Ferramenta**:
   - Abra o [link do projeto no GitHub Pages](https://seu-usuario.github.io/matriz-leontief/).

2. **Insira os Dados**:
   - Nomes dos setores (separados por vírgulas).
   - Número de setores.
   - Valores da matriz técnica \((A)\) e demanda final \((Y)\).

3. **Clique em "Calcular"**:
   - O sistema calculará \((I - A)^{-1}\) e \(X\).
   - Uma observação será gerada para interpretar os resultados.

---

## 🧪 **Exemplo de Uso**

### Dados de Entrada:
- **Setores**: Logística, Varejo, Encomendas.
- **Matriz Técnica (\(A\))**:
  ```
  0.1, 0.2, 0.3
  0.2, 0.1, 0.4
  0.3, 0.3, 0.2
  ```
- **Demanda Final (\(Y\))**:
  ```
  200, 300, 150
  ```

### Resultados Esperados:
- **Matriz Inversa de Leontief (\((I - A)^{-1}\))**:
  ```
  1.14, 0.30, 0.50
  0.38, 1.17, 0.63
  0.49, 0.52, 1.39
  ```
- **Produção Total (\(X\))**:
  ```
  Logística: 369.0
  Varejo: 496.5
  Encomendas: 444.5
  ```

---

## 🤝 **Contribuindo**

1. Faça um fork do repositório.
2. Crie uma branch para suas modificações:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie sua branch:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.

---

## 📝 **Licença**
Este projeto está licenciado sob a licença [MIT](LICENSE). Sinta-se à vontade para utilizá-lo e modificá-lo.

---

## 👨‍💻 **Autor**
Desenvolvido por **Eric Vieira**.

- 🌐 [Meu LinkedIn](https://www.linkedin.com/in/ericvieiradf/)
- 📧 [Power BI na Real](https://www.youtube.com/@powerbinareal)
