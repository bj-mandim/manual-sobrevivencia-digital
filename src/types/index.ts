export type NivelRisco = 'Crítico' | 'Alto' | 'Médio'
export type CategoriaGolpe =
  | 'financeiro'
  | 'identidade'
  | 'redes-sociais'
  | 'ia-tecnologia'

export interface Passo {
  numero: number
  titulo: string
  descricao: string
}

export interface GolpeRelacionado {
  id: number
  slug: string
  nome: string
  conexao: string
}

export interface Golpe {
  id: number
  slug: string
  nome: string
  descricao: string
  nivelRisco: NivelRisco
  categoria: CategoriaGolpe
  videoUrl: string
  dataLancamento?: string
  comoFunciona: Passo[]
  sinaisDeAlerta: string[]
  comoEvitar: string[]
  estatistica?: string
  golpesRelacionados?: GolpeRelacionado[]
  dicasEspecializadas?: string[]
}

export interface Situacao {
  id: string
  label: string
  iconName: string
  corFundo: string
  corIcone: string
  golpeSlug: string
  videoUrl?: string
}

export interface ChecklistLink {
  label: string
  url: string
}

export interface ChecklistItemType {
  id: string
  texto: string
  complemento?: string
  link?: ChecklistLink
  links?: ChecklistLink[]
}

export interface FaseContencao {
  id: string
  titulo: string
  descricao: string
  cor: string
  corBg: string
  corBorda: string
  corNum: string
  itens: ChecklistItemType[]
}

export interface PerfilProtecao {
  id: string
  label: string
  emoji: string
  videoUrl?: string
  golpesPrincipais: string[]
  dicas: string[]
}
