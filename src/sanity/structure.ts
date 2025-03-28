import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Voltis')
    .items([
      S.documentTypeListItem('hero').title('Hero'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['hero'].includes(item.getId()!)
      ),
    ])
