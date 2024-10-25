import React, { createContext, useContext, useState, ReactNode } from "react";
import "./TabControl.css";
import Layout from "../Layout/Layout";
import clsx from "clsx";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
  className?: string;
}

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (label: string) => void;
} | null>(null);

export const Tab = ({ label, children }: TabProps) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab must be used within a Tabs");
  }

  const { activeTab } = context;
  return activeTab === label ? (
    <div className="tab-content">{children}</div>
  ) : null;
};

export const Tabs = ({ children, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={clsx("tabs", className)}>
        <div className="tab-buttons">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Layout>
                <button
                  key={label}
                  onClick={() => setActiveTab(label)}
                  className={`tab-button ${
                    label === activeTab ? "active" : ""
                  }`}
                >
                  {label}
                </button>
              </Layout>
            );
          })}
        </div>
        <Layout>
          <div className="tab-content-container min-h-72">{children}</div>
        </Layout>
      </div>
    </TabsContext.Provider>
  );
};
