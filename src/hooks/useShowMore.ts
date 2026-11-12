import { useState } from 'react';

export function useShowMore<T>(items: T[], initialCount: number) {
  const [expanded, setExpanded] = useState(false);

  return {
    visible: expanded ? items : items.slice(0, initialCount),
    hasMore: !expanded && items.length > initialCount,
    showAll: () => setExpanded(true),
  };
}