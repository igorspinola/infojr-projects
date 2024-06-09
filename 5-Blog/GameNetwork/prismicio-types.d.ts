// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CriadoresDocumentDataSlicesSlice = never;

/**
 * Content for Criadores documents
 */
interface CriadoresDocumentData {
  /**
   * Avatar field in *Criadores*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: criadores.avatar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;

  /**
   * Nome field in *Criadores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Nome do criador
   * - **API ID Path**: criadores.nome
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome: prismic.KeyTextField;

  /**
   * Sobre field in *Criadores*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Descrição do criador
   * - **API ID Path**: criadores.sobre
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sobre: prismic.RichTextField;

  /**
   * Slice Zone field in *Criadores*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: criadores.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CriadoresDocumentDataSlicesSlice> /**
   * Meta Description field in *Criadores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: criadores.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Criadores*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: criadores.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Criadores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: criadores.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Criadores document from Prismic
 *
 * - **API ID**: `criadores`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CriadoresDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CriadoresDocumentData>,
    "criadores",
    Lang
  >;

/**
 * Item in *Footer → Contatos*
 */
export interface FooterDocumentDataContatosItem {
  /**
   * Rede Social field in *Footer → Contatos*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contatos[].rede_social
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  rede_social: prismic.SelectField<
    "Instagram" | "LinkedIn" | "GitHub" | "E-mail"
  >;

  /**
   * Label field in *Footer → Contatos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contatos[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Footer → Contatos*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contatos[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Termos field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.termos
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  termos: prismic.KeyTextField;

  /**
   * Contatos field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contatos[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contatos: prismic.GroupField<Simplify<FooterDocumentDataContatosItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomeDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

type PostagensDocumentDataSlicesSlice = never;

/**
 * Content for Postagens documents
 */
interface PostagensDocumentData {
  /**
   * Titulo field in *Postagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Titulo da postagem
   * - **API ID Path**: postagens.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Imagem field in *Postagens*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: postagens.imagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Thumb field in *Postagens*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: postagens.thumb
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  thumb: prismic.EmbedField;

  /**
   * Resumo field in *Postagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postagens.resumo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  resumo: prismic.KeyTextField;

  /**
   * Tag field in *Postagens*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Jogos
   * - **API ID Path**: postagens.tag
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tag: prismic.SelectField<"Jogos" | "Filmes" | "Séries", "filled">;

  /**
   * Novidade field in *Postagens*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: postagens.novidade
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  novidade: prismic.BooleanField;

  /**
   * Texto field in *Postagens*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Texto da postagem
   * - **API ID Path**: postagens.texto
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto: prismic.RichTextField;

  /**
   * Autor field in *Postagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Autor da postagem
   * - **API ID Path**: postagens.autor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  autor: prismic.KeyTextField;

  /**
   * Data field in *Postagens*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Data da postagem
   * - **API ID Path**: postagens.data
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  data: prismic.DateField;

  /**
   * Rota field in *Postagens*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link para a página do post
   * - **API ID Path**: postagens.rota
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  rota: prismic.LinkField;

  /**
   * Slice Zone field in *Postagens*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: postagens.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PostagensDocumentDataSlicesSlice> /**
   * Meta Description field in *Postagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: postagens.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Postagens*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: postagens.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Postagens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: postagens.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Postagens document from Prismic
 *
 * - **API ID**: `postagens`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostagensDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PostagensDocumentData>,
    "postagens",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label Text field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Texto da Label
   * - **API ID Path**: settings.navigation[].label_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_text: prismic.KeyTextField;

  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label Color field in *Settings → Navigation*
   *
   * - **Field Type**: Color
   * - **Placeholder**: Cor da Label
   * - **API ID Path**: settings.navigation[].label_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  label_color: prismic.ColorField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Titulo Blog field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.titulo_blog
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_blog: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | CriadoresDocument
  | FooterDocument
  | HomeDocument
  | PostagensDocument
  | SettingsDocument;

/**
 * Primary content in *Carousel → Default → Primary*
 */
export interface CarouselSliceDefaultPrimary {
  /**
   * Tag field in *Carousel → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.tag
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tag: prismic.SelectField<"Novidades" | "Jogos" | "Filmes" | "Séries">;
}

/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarouselSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Carousel → Group by Author → Primary*
 */
export interface CarouselSliceGroupByAuthorPrimary {
  /**
   * Author field in *Carousel → Group by Author → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.groupByAuthor.primary.author
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;
}

/**
 * Group by Author variation for Carousel Slice
 *
 * - **API ID**: `groupByAuthor`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceGroupByAuthor = prismic.SharedSliceVariation<
  "groupByAuthor",
  Simplify<CarouselSliceGroupByAuthorPrimary>,
  never
>;

/**
 * Slice variation for *Carousel*
 */
type CarouselSliceVariation = CarouselSliceDefault | CarouselSliceGroupByAuthor;

/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: Carousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSlice = prismic.SharedSlice<
  "carousel",
  CarouselSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Hot Topics*
 */
export interface HeroSliceDefaultPrimaryHotTopicsItem {
  /**
   * UID Post field in *Hero → Default → Primary → Hot Topics*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hot_topics[].uid_post
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  uid_post: prismic.ContentRelationshipField<"postagens">;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hot Topics field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hot_topics[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  hot_topics: prismic.GroupField<
    Simplify<HeroSliceDefaultPrimaryHotTopicsItem>
  >;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CriadoresDocument,
      CriadoresDocumentData,
      CriadoresDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataContatosItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      PostagensDocument,
      PostagensDocumentData,
      PostagensDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      CarouselSlice,
      CarouselSliceDefaultPrimary,
      CarouselSliceGroupByAuthorPrimary,
      CarouselSliceVariation,
      CarouselSliceDefault,
      CarouselSliceGroupByAuthor,
      HeroSlice,
      HeroSliceDefaultPrimaryHotTopicsItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}