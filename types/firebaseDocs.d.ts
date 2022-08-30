interface FavorItemValue extends ReferenceItem {
  categoryId?: string;
}

interface ReferenceItem {
  id: string;
  ref: DocumentReference;
}
interface FavorDocs {
  bookmarks: FavorItemValue[];
  likes: FavorItemValue[];
}

type TagItemValue = {
  id: string;
  name: string;
  questions: ReferenceItem[];
  categoryId?: string;
}