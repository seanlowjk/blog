import React from "react";
import { Table } from "react-bootstrap";
import { GradingComponent } from "../../../utils/ModuleTypes";

type ModuleGradingOverviewProps = {
  components: GradingComponent[];
};

function ModuleGradingOverview(props: ModuleGradingOverviewProps) {
  const { components } = props;

  return (
    <>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th>Component</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {components.map((component) => (
            <tr>
              <td>{component.type}</td>
              <td>
                {component.weightage
                  ? `${component.weightage} %`
                  : "Not Revealed"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ModuleGradingOverview;
