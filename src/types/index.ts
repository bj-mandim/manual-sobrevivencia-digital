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

export interface Golpe {
  id: number
  slug: string
  nome: string
  descricao: string
  nivelRisco: NivelRisco
  categoria: CategoriaGolpe
  videoUrl: string
  comoFunciona: Passo[]
  sinaisDeAlerta: string[]
  comoEvitar: string[]
  estatistica?: string
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

export interface ChecklistItemType {
  id: string
  texto: string
  complemento?: string
  link?: { label: string; url: string }
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
  golpesPrincipais: string[]
  dicas: string[]
}
