/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { useAppState } from '../../context/app';
import { ActiveTabs, InputLabel } from '../../lib';
import { uniqueBy } from '../../utils/removeDuplicates';
import { Checkbox, SelectAll } from '../Checkbox';
import { InputFormik } from '../InputFormik/InputFormik';
import { useImperativeClose } from '../Modal/Modal';
import { validate } from '../../utils/validate';
import { useActiveTabs } from '../../hooks/useActiveTabs';

export const GroupForm = ({
  onSubmit,
  submitButton,
  initialValues = { name: '', tabs: [] },
}) => {
  const {
    state: { groups },
  } = useAppState();
  const closeModal = useImperativeClose();
  const [activeTabs] = useActiveTabs();
  const tabs = uniqueBy(
    [...initialValues.tabs, ...activeTabs],
    'title',
  );
  return (
    <Formik
      enableReinitialize
      validate={validate(initialValues, groups)}
      initialValues={{
        ...initialValues,
        tabs: initialValues.tabs.map((t) => t.url),
      }}
      onSubmit={(values) => {
        const modifiedValues = {
          ...values,
          tabs: tabs.filter((tab) => values.tabs.includes(tab.url)),
        };
        onSubmit(modifiedValues);
        closeModal();
      }}
    >
      <Form>
        <div css={{ marginTop: '16px' }}>
          <InputFormik
            name="name"
            label="Name"
            id="name"
            type="text"
            placeholder="Give a name to your group"
          />
          <div css={{ marginTop: 12 }}>
            <InputLabel htmlFor="tabs">Active tabs</InputLabel>
            <div css={{ marginTop: 4 }}>
              <SelectAll
                name="tabs"
                tabs={tabs.map((t) => t.url)}
                checked={false}
              />
            </div>
            <ActiveTabs>
              {tabs.map((tab) => (
                <div key={tab.url} css={{ marginBottom: '8px' }}>
                  <Checkbox
                    label={tab.title}
                    name="tabs"
                    value={tab.url}
                  />
                </div>
              ))}
            </ActiveTabs>
          </div>
          <div
            css={{
              marginTop: '16px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {React.cloneElement(
              submitButton,
              { type: 'submit' },
              ...(Array.isArray(submitButton.props.children)
                ? submitButton.props.children
                : [submitButton.props.children]),
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};
