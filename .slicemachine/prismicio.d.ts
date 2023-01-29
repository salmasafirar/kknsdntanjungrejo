// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Agenda documents */
interface AgendaDocumentData {
    /**
     * Title field in *Agenda*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: agenda.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Waktu field in *Agenda*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: agenda.waktu
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    waktu: prismicT.KeyTextField;
    /**
     * Tempat field in *Agenda*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: agenda.tempat
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    tempat: prismicT.KeyTextField;
    /**
     * date field in *Agenda*
     *
     * - **Field Type**: Date
     * - **Placeholder**: Tanggal
     * - **API ID Path**: agenda.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
}
/**
 * Agenda document from Prismic
 *
 * - **API ID**: `agenda`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AgendaDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AgendaDocumentData>, "agenda", Lang>;
/** Content for Berita documents */
interface BeritaDocumentData {
    /**
     * Layout field in *Berita*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: berita.layout
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    layout: prismicT.RelationField<"layouts">;
    /**
     * Title field in *Berita*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Judul berita
     * - **API ID Path**: berita.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Berita*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Deskripsi berita
     * - **API ID Path**: berita.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Date field in *Berita*
     *
     * - **Field Type**: Date
     * - **Placeholder**: Tanggal berita dibuat
     * - **API ID Path**: berita.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * Image field in *Berita*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: berita.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Berita*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: berita.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BeritaDocumentDataSlicesSlice>;
}
/**
 * Slice for *Berita → Slice Zone*
 *
 */
type BeritaDocumentDataSlicesSlice = ParagraphSlice | ImageSlice;
/**
 * Berita document from Prismic
 *
 * - **API ID**: `berita`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BeritaDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BeritaDocumentData>, "berita", Lang>;
/** Content for Gallery documents */
interface GalleryDocumentData {
    /**
     * Title field in *Gallery*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Gallery*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Gallery*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Date field in *Gallery*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
}
/**
 * Gallery document from Prismic
 *
 * - **API ID**: `gallery`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GalleryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<GalleryDocumentData>, "gallery", Lang>;
/** Content for Layouts documents */
interface LayoutsDocumentData {
    /**
     * Slice Zone field in *Layouts*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: layouts.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<LayoutsDocumentDataSlicesSlice>;
}
/**
 * Slice for *Layouts → Slice Zone*
 *
 */
type LayoutsDocumentDataSlicesSlice = FooterMainSlice | NavbarMainSlice | ChildrenSlice;
/**
 * Layouts document from Prismic
 *
 * - **API ID**: `layouts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LayoutsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<LayoutsDocumentData>, "layouts", Lang>;
/** Content for Pages documents */
interface PagesDocumentData {
    /**
     * Html Title field in *Pages*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: pages.htmlTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    htmlTitle: prismicT.KeyTextField;
    /**
     * Route field in *Pages*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: pages.route
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    route: prismicT.KeyTextField;
    /**
     * Layout field in *Pages*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: pages.layout
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    layout: prismicT.RelationField<"layouts">;
    /**
     * Slice Zone field in *Pages*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: pages.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PagesDocumentDataSlicesSlice>;
}
/**
 * Slice for *Pages → Slice Zone*
 *
 */
type PagesDocumentDataSlicesSlice = BannerSlice | BeritaOverviewSlice | TentangSlice | AgendaPengumumanSlice | ProfilSlice | TentangkamiSlice | KomiteGridSlice | GalleryOverviewSlice;
/**
 * Pages document from Prismic
 *
 * - **API ID**: `pages`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PagesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PagesDocumentData>, "pages", Lang>;
/** Content for Pengumuman documents */
interface PengumumanDocumentData {
    /**
     * Title field in *Pengumuman*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: pengumuman.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Pengumuman*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: pengumuman.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Date field in *Pengumuman*
     *
     * - **Field Type**: Date
     * - **Placeholder**: Tanggal pengumuman dibuat
     * - **API ID Path**: pengumuman.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
}
/**
 * Pengumuman document from Prismic
 *
 * - **API ID**: `pengumuman`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PengumumanDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PengumumanDocumentData>, "pengumuman", Lang>;
/** Content for Redirect Link documents */
interface RedirectLinkDocumentData {
    /**
     * route field in *Redirect Link*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: redirect_link.route
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    route: prismicT.KeyTextField;
}
/**
 * Redirect Link document from Prismic
 *
 * - **API ID**: `redirect_link`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RedirectLinkDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<RedirectLinkDocumentData>, "redirect_link", Lang>;
export type AllDocumentTypes = AgendaDocument | BeritaDocument | GalleryDocument | LayoutsDocument | PagesDocument | PengumumanDocument | RedirectLinkDocument;
/**
 * Default variation for AgendaPengumuman Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AgendaPengumuman`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AgendaPengumumanSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *AgendaPengumuman*
 *
 */
type AgendaPengumumanSliceVariation = AgendaPengumumanSliceDefault;
/**
 * AgendaPengumuman Shared Slice
 *
 * - **API ID**: `agenda_pengumuman`
 * - **Description**: `AgendaPengumuman`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AgendaPengumumanSlice = prismicT.SharedSlice<"agenda_pengumuman", AgendaPengumumanSliceVariation>;
/**
 * Item in Banner → Items
 *
 */
export interface BannerSliceDefaultItem {
    /**
     * image field in *Banner → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: banner.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * text field in *Banner → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: banner.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * button field in *Banner → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: banner.items[].button
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button: prismicT.KeyTextField;
    /**
     * href field in *Banner → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: banner.items[].href
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    href: prismicT.KeyTextField;
}
/**
 * Default variation for Banner Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Banner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<BannerSliceDefaultItem>>;
/**
 * Slice variation for *Banner*
 *
 */
type BannerSliceVariation = BannerSliceDefault;
/**
 * Banner Shared Slice
 *
 * - **API ID**: `banner`
 * - **Description**: `Banner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerSlice = prismicT.SharedSlice<"banner", BannerSliceVariation>;
/**
 * Primary content in BannerProfil → Primary
 *
 */
interface ProfilSliceDefaultPrimary {
    /**
     * Title field in *BannerProfil → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: profil.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *BannerProfil → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: profil.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *BannerProfil → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: profil.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for BannerProfil Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Profil`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfilSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ProfilSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BannerProfil*
 *
 */
type ProfilSliceVariation = ProfilSliceDefault;
/**
 * BannerProfil Shared Slice
 *
 * - **API ID**: `profil`
 * - **Description**: `Profil`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfilSlice = prismicT.SharedSlice<"profil", ProfilSliceVariation>;
/**
 * Primary content in BeritaOverview → Primary
 *
 */
interface BeritaOverviewSliceDefaultPrimary {
    /**
     * Tampilkan Semua Berita field in *BeritaOverview → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: berita_overview.primary.tampilkanSemua
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    tampilkanSemua: prismicT.BooleanField;
}
/**
 * Default variation for BeritaOverview Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BeritaOverview`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BeritaOverviewSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BeritaOverviewSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BeritaOverview*
 *
 */
type BeritaOverviewSliceVariation = BeritaOverviewSliceDefault;
/**
 * BeritaOverview Shared Slice
 *
 * - **API ID**: `berita_overview`
 * - **Description**: `BeritaOverview`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BeritaOverviewSlice = prismicT.SharedSlice<"berita_overview", BeritaOverviewSliceVariation>;
/**
 * Default variation for Children Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Children`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ChildrenSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *Children*
 *
 */
type ChildrenSliceVariation = ChildrenSliceDefault;
/**
 * Children Shared Slice
 *
 * - **API ID**: `children`
 * - **Description**: `Children`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ChildrenSlice = prismicT.SharedSlice<"children", ChildrenSliceVariation>;
/**
 * Primary content in FooterMain → Primary
 *
 */
interface FooterMainSliceDefaultPrimary {
    /**
     * Logo field in *FooterMain → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_main.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * address field in *FooterMain → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_main.primary.address
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    address: prismicT.RichTextField;
}
/**
 * Item in FooterMain → Items
 *
 */
export interface FooterMainSliceDefaultItem {
    /**
     * Text field in *FooterMain → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_main.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
    /**
     * route field in *FooterMain → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_main.items[].route
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    route: prismicT.KeyTextField;
}
/**
 * Default variation for FooterMain Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FooterMain`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterMainSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterMainSliceDefaultPrimary>, Simplify<FooterMainSliceDefaultItem>>;
/**
 * Slice variation for *FooterMain*
 *
 */
type FooterMainSliceVariation = FooterMainSliceDefault;
/**
 * FooterMain Shared Slice
 *
 * - **API ID**: `footer_main`
 * - **Description**: `FooterMain`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterMainSlice = prismicT.SharedSlice<"footer_main", FooterMainSliceVariation>;
/**
 * Primary content in GalleryOverview → Primary
 *
 */
interface GalleryOverviewSliceDefaultPrimary {
    /**
     * Title field in *GalleryOverview → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: gallery_overview.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *GalleryOverview → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: gallery_overview.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for GalleryOverview Slice
 *
 * - **API ID**: `default`
 * - **Description**: `GalleryOverview`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GalleryOverviewSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<GalleryOverviewSliceDefaultPrimary>, never>;
/**
 * Slice variation for *GalleryOverview*
 *
 */
type GalleryOverviewSliceVariation = GalleryOverviewSliceDefault;
/**
 * GalleryOverview Shared Slice
 *
 * - **API ID**: `gallery_overview`
 * - **Description**: `GalleryOverview`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GalleryOverviewSlice = prismicT.SharedSlice<"gallery_overview", GalleryOverviewSliceVariation>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
    /**
     * Title field in *Header → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: header.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Header → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: header.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Header → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeaderSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismicT.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Title field in *Image → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: image.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in KomiteGrid → Primary
 *
 */
interface KomiteGridSliceDefaultPrimary {
    /**
     * Title field in *KomiteGrid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: komite_grid.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *KomiteGrid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: komite_grid.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in KomiteGrid → Items
 *
 */
export interface KomiteGridSliceDefaultItem {
    /**
     * foto field in *KomiteGrid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: komite_grid.items[].foto
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    foto: prismicT.ImageField<never>;
    /**
     * nama field in *KomiteGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: komite_grid.items[].nama
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nama: prismicT.KeyTextField;
    /**
     * posisi field in *KomiteGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: komite_grid.items[].posisi
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    posisi: prismicT.KeyTextField;
    /**
     * more information field in *KomiteGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: komite_grid.items[].moreInfo
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    moreInfo: prismicT.KeyTextField;
    /**
     * email field in *KomiteGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: komite_grid.items[].email
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
    /**
     * nohp field in *KomiteGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: komite_grid.items[].nohp
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nohp: prismicT.KeyTextField;
}
/**
 * Default variation for KomiteGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `KomiteGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type KomiteGridSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<KomiteGridSliceDefaultPrimary>, Simplify<KomiteGridSliceDefaultItem>>;
/**
 * Slice variation for *KomiteGrid*
 *
 */
type KomiteGridSliceVariation = KomiteGridSliceDefault;
/**
 * KomiteGrid Shared Slice
 *
 * - **API ID**: `komite_grid`
 * - **Description**: `KomiteGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type KomiteGridSlice = prismicT.SharedSlice<"komite_grid", KomiteGridSliceVariation>;
/**
 * Primary content in NavbarMain → Primary
 *
 */
interface NavbarMainSliceDefaultPrimary {
    /**
     * Logo field in *NavbarMain → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar_main.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
}
/**
 * Item in NavbarMain → Items
 *
 */
export interface NavbarMainSliceDefaultItem {
    /**
     * text field in *NavbarMain → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar_main.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
    /**
     * route field in *NavbarMain → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar_main.items[].route
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    route: prismicT.KeyTextField;
}
/**
 * Default variation for NavbarMain Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavbarMain`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarMainSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavbarMainSliceDefaultPrimary>, Simplify<NavbarMainSliceDefaultItem>>;
/**
 * Slice variation for *NavbarMain*
 *
 */
type NavbarMainSliceVariation = NavbarMainSliceDefault;
/**
 * NavbarMain Shared Slice
 *
 * - **API ID**: `navbar_main`
 * - **Description**: `NavbarMain`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarMainSlice = prismicT.SharedSlice<"navbar_main", NavbarMainSliceVariation>;
/**
 * Primary content in Paragraph → Primary
 *
 */
interface ParagraphSliceDefaultPrimary {
    /**
     * Text field in *Paragraph → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: paragraph.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ParagraphSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Paragraph*
 *
 */
type ParagraphSliceVariation = ParagraphSliceDefault;
/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSlice = prismicT.SharedSlice<"paragraph", ParagraphSliceVariation>;
/**
 * Primary content in Tentang → Primary
 *
 */
interface TentangSliceDefaultPrimary {
    /**
     * Title field in *Tentang → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: tentang.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Tentang → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: tentang.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Tentang → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tentang.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Tentang Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Tentang`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TentangSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TentangSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Tentang*
 *
 */
type TentangSliceVariation = TentangSliceDefault;
/**
 * Tentang Shared Slice
 *
 * - **API ID**: `tentang`
 * - **Description**: `Tentang`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TentangSlice = prismicT.SharedSlice<"tentang", TentangSliceVariation>;
/**
 * Primary content in Tentangkami → Primary
 *
 */
interface TentangkamiSliceDefaultPrimary {
    /**
     * Title field in *Tentangkami → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: tentangkami.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Tentangkami → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: tentangkami.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Tentangkami → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tentangkami.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Tentangkami Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Tentangkami`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TentangkamiSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TentangkamiSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Tentangkami*
 *
 */
type TentangkamiSliceVariation = TentangkamiSliceDefault;
/**
 * Tentangkami Shared Slice
 *
 * - **API ID**: `tentangkami`
 * - **Description**: `Tentangkami`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TentangkamiSlice = prismicT.SharedSlice<"tentangkami", TentangkamiSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AgendaDocumentData, AgendaDocument, BeritaDocumentData, BeritaDocumentDataSlicesSlice, BeritaDocument, GalleryDocumentData, GalleryDocument, LayoutsDocumentData, LayoutsDocumentDataSlicesSlice, LayoutsDocument, PagesDocumentData, PagesDocumentDataSlicesSlice, PagesDocument, PengumumanDocumentData, PengumumanDocument, RedirectLinkDocumentData, RedirectLinkDocument, AllDocumentTypes, AgendaPengumumanSliceDefault, AgendaPengumumanSliceVariation, AgendaPengumumanSlice, BannerSliceDefaultItem, BannerSliceDefault, BannerSliceVariation, BannerSlice, ProfilSliceDefaultPrimary, ProfilSliceDefault, ProfilSliceVariation, ProfilSlice, BeritaOverviewSliceDefaultPrimary, BeritaOverviewSliceDefault, BeritaOverviewSliceVariation, BeritaOverviewSlice, ChildrenSliceDefault, ChildrenSliceVariation, ChildrenSlice, FooterMainSliceDefaultPrimary, FooterMainSliceDefaultItem, FooterMainSliceDefault, FooterMainSliceVariation, FooterMainSlice, GalleryOverviewSliceDefaultPrimary, GalleryOverviewSliceDefault, GalleryOverviewSliceVariation, GalleryOverviewSlice, HeaderSliceDefaultPrimary, HeaderSliceDefault, HeaderSliceVariation, HeaderSlice, ImageSliceDefaultPrimary, ImageSliceDefault, ImageSliceVariation, ImageSlice, KomiteGridSliceDefaultPrimary, KomiteGridSliceDefaultItem, KomiteGridSliceDefault, KomiteGridSliceVariation, KomiteGridSlice, NavbarMainSliceDefaultPrimary, NavbarMainSliceDefaultItem, NavbarMainSliceDefault, NavbarMainSliceVariation, NavbarMainSlice, ParagraphSliceDefaultPrimary, ParagraphSliceDefault, ParagraphSliceVariation, ParagraphSlice, TentangSliceDefaultPrimary, TentangSliceDefault, TentangSliceVariation, TentangSlice, TentangkamiSliceDefaultPrimary, TentangkamiSliceDefault, TentangkamiSliceVariation, TentangkamiSlice };
    }
}
