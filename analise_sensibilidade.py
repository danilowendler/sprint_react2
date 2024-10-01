import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Função para calcular a pontuação
def calcular_pontuacao_sensibilidade(vitoria, pole_position, volta_mais_rapida, posicao_final):
    pontos_vitoria = 25 * vitoria
    pontos_pole_position = 3 * pole_position
    pontos_volta_mais_rapida = 1 * volta_mais_rapida
    pontos_posicao_final = 0
    if 1 < posicao_final <= 10:
        pontos_posicao_final = [18, 15, 12, 10, 8, 6, 4, 2, 1][int(posicao_final - 2)]
    return pontos_vitoria + pontos_pole_position + pontos_volta_mais_rapida + pontos_posicao_final

# Função para realizar a análise de sensibilidade
def analise_sensibilidade(vitorias, pole_positions, voltas_mais_rapidas, posicoes_finais):
    resultados = []
    for v in vitorias:
        resultados.append([v, calcular_pontuacao_sensibilidade(v, 1, 1, 1)])
    for p in pole_positions:
        resultados.append([p, calcular_pontuacao_sensibilidade(1, p, 1, 1)])
    for v_rapidas in voltas_mais_rapidas:
        resultados.append([v_rapidas, calcular_pontuacao_sensibilidade(1, 1, v_rapidas, 1)])
    for p_final in posicoes_finais:
        resultados.append([p_final, calcular_pontuacao_sensibilidade(1, 1, 1, p_final)])
    return resultados

# Intervalos de análise
vitorias = np.linspace(0, 5, 100)
pole_positions = np.linspace(0, 5, 100)
voltas_mais_rapidas = np.linspace(0, 5, 100)
posicoes_finais = np.linspace(1, 10, 100)

# Realizando a análise de sensibilidade
resultados = analise_sensibilidade(vitorias, pole_positions, voltas_mais_rapidas, posicoes_finais)

# Criando o dataframe com os resultados
df_sensibilidade = pd.DataFrame(resultados, columns=["Variável", "Pontuação Total"])

# Exibindo os resultados e salvando em CSV
print(df_sensibilidade)
df_sensibilidade.to_csv('analise_sensibilidade.csv', index=False)

# Plotando o gráfico
plt.figure(figsize=(10, 6))
plt.plot(vitorias, [calcular_pontuacao_sensibilidade(v, 1, 1, 1) for v in vitorias], label='Vitórias', color='blue')
plt.plot(pole_positions, [calcular_pontuacao_sensibilidade(1, p, 1, 1) for p in pole_positions], label='Pole Positions', color='green')
plt.plot(voltas_mais_rapidas, [calcular_pontuacao_sensibilidade(1, 1, v, 1) for v in voltas_mais_rapidas], label='Voltas Mais Rápidas', color='red')
plt.plot(posicoes_finais, [calcular_pontuacao_sensibilidade(1, 1, 1, p) for p in posicoes_finais], label='Posições Finais', color='orange')
plt.xlabel('Quantidade')
plt.ylabel('Pontuação Total')
plt.title('Análise de Sensibilidade da Pontuação')
plt.legend()
plt.grid(True)
plt.show()
