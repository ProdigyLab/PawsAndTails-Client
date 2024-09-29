import React from "react";
import { Card, Skeleton, Space } from "antd";

const PetDetailsSkeleton = () => (
  <Card>
    <Skeleton.Image style={{ width: "100%", height: 300 }} active />
    <Skeleton active paragraph={{ rows: 0 }} />
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex", marginTop: 16 }}
    >
      <Skeleton.Input style={{ width: "40%" }} active size="small" />
      <Skeleton.Input style={{ width: "60%" }} active size="small" />
      <Skeleton.Input style={{ width: "50%" }} active size="small" />
      <Skeleton.Input style={{ width: "70%" }} active size="small" />
      <Skeleton active paragraph={{ rows: 3 }} />
      <Skeleton.Input style={{ width: "30%" }} active size="small" />
    </Space>
  </Card>
);

export default PetDetailsSkeleton;
