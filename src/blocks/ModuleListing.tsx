import React from 'react';
import { Section } from '../components/layout/Section/Section';
import { Grid, GridLayout } from '../components/layout/Grid/Grid';
import modules from '../../static/library/modules/index.json';
import featuredModuleIds from '../../static/data/featuredModules.json';
import { ModuleCard } from '../components/cards/ModuleCard/ModuleCard';

const featuredModules = featuredModuleIds.map((moduleId) =>
  modules.find((module) => module.label === moduleId)
);

interface ModuleListingProps {
  title: string;
  hasNoLink?: boolean;
  isFeaturedOnly: boolean;
}

export function ModuleListing({
  title,
  hasNoLink,
  isFeaturedOnly,
}: ModuleListingProps) {
  const renderedModules = isFeaturedOnly ? featuredModules : modules;

  return (
    <Section
      title={title}
      linkHref={hasNoLink ? undefined : '/library/modules/overview'}
      linkLabel={hasNoLink ? false : 'View all'}
    >
      <Grid layout={GridLayout.Thirds} hasEqualHeightItems>
        {renderedModules.map((module) => {
          if (!module) return null;

          return (
            <ModuleCard
              key={module.label}
              title={module.label}
              description={module.desc}
              readMoreUrl={module.docs}
              thumbUrl={module.icon}
              importArgs={{
                path: module.project,
                options: {
                  thumb: module.icon,
                  name: module.label,
                },
              }}
            />
          );
        })}
      </Grid>
    </Section>
  );
}
