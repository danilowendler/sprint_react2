import pandas as pd

# Função de cálculo de pontuação
def calcular_pontuacao(vitoria, pole_position, volta_mais_rapida, posicao_final):
    pontos_vitoria = 25 * vitoria
    pontos_pole_position = 3 * pole_position
    pontos_volta_mais_rapida = 1 * volta_mais_rapida
    pontos_posicao_final = 0
    if 1 < posicao_final <= 10:
        pontos_posicao_final = [18, 15, 12, 10, 8, 6, 4, 2, 1][int(posicao_final - 2)]
    return pontos_vitoria + pontos_pole_position + pontos_volta_mais_rapida + pontos_posicao_final

# Função para receber dados de pilotos
def inserir_dados_pilotos(num_pilotos):
    dados_pilotos = []
    for i in range(num_pilotos):
        print(f"\nInsira os dados para o Piloto {i + 1}:")
        vitoria = int(input("Vitórias: "))
        pole_position = int(input("Pole Positions: "))
        volta_mais_rapida = int(input("Voltas Mais Rápidas: "))
        while True:  # Validação de entrada para posição final
            posicao_final = int(input("Posição Final (1-10): "))
            if 1 <= posicao_final <= 10:
                break
            else:
                print("Erro: Insira uma posição final entre 1 e 10.")
        
        pontuacao = calcular_pontuacao(vitoria, pole_position, volta_mais_rapida, posicao_final)
        dados_pilotos.append([f"Piloto {i + 1}", vitoria, pole_position, volta_mais_rapida, posicao_final, pontuacao])
    
    return dados_pilotos

# Função para exibir e salvar resultados
def exibir_resultados(df_pilotos):
    # Formatação de colunas
    pd.options.display.float_format = '{:.2f}'.format

    # Ordenar a tabela
    df_pilotos.sort_values(by="Pontuação", ascending=False, inplace=True)

    # Exibindo os resultados
    print("\nResultados:")
    print(df_pilotos.to_string(index=False, header=True, justify='left', col_space=10))
    
    # Salvando os dados em um arquivo CSV
    salvar_csv = input("Deseja salvar os resultados em um arquivo CSV? (s/n): ").lower()
    if salvar_csv == 's':
        df_pilotos.to_csv('resultados_pilotos.csv', index=False)
        print("Resultados salvos em 'resultados_pilotos.csv'.")

# Pedindo ao usuário para inserir os dados
num_pilotos = int(input("Quantos pilotos você deseja inserir? "))

# Inserindo dados
dados_pilotos = inserir_dados_pilotos(num_pilotos)

# Criando um dataframe para organizar os dados
df_pilotos = pd.DataFrame(dados_pilotos, columns=["Piloto", "Vitórias", "Pole", "Voltas Rápidas", "Posição", "Pontuação"])

# Exibir e salvar os resultados
exibir_resultados(df_pilotos)
