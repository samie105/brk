/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  faCancel,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useUserData } from "../../../contexts/userrContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skeleton } from "../../ui/skeleton";

export default function History() {
  const { details } = useUserData();
  const hist = [
    {
      name: "deposit",
      data: details.depositHistory || [], // Initialize as empty array if data is not available yet
    },
    {
      name: "withdrawal",
      data: details.withdrawalHistory || [], // Initialize as empty array if data is not available yet
    },
  ];
  const [selectedHistory, setSelectedHistory] = useState("deposit");

  const history = hist.find((h) => h.name === selectedHistory);
  const currentHistory = [...history.data].reverse();

  return (
    <>
      {details === 0 ? (
        <div className="p-4">
          <Skeleton className="h-60 bg-gray-200/80" />
        </div>
      ) : (
        <div className="p-4">
          <Select
            onValueChange={(value) => setSelectedHistory(value)}
            className="font-bold"
          >
            <SelectTrigger className="">
              <SelectValue className="font-bold">
                {selectedHistory.charAt(0).toUpperCase() +
                  selectedHistory.slice(1)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deposit" className="font-bold">
                Deposit
              </SelectItem>
              <SelectItem value="withdrawal" className="font-bold">
                Withdrawal
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-4 py-3">
            {" "}
            <Table>
              <TableCaption>
                {selectedHistory.charAt(0).toUpperCase() +
                  selectedHistory.slice(1)}{" "}
                History
              </TableCaption>
              <TableHeader>
                <TableRow>
                  {selectedHistory === "deposit" ? (
                    <>
                      <TableHead className="font-bold text-slate-800">
                        Date Added
                      </TableHead>
                      <TableHead className="font-bold text-slate-800">
                        Deposit Method
                      </TableHead>
                      <TableHead className="font-bold text-slate-800">
                        Amount
                      </TableHead>
                      <TableHead className="font-bold text-slate-800">
                        Transaction Status
                      </TableHead>
                    </>
                  ) : (
                    <>
                      <TableHead className="font-bold text-slate-800">
                        Date
                      </TableHead>
                      <TableHead className="font-bold text-slate-800">
                        Withdrawal Method
                      </TableHead>
                      <TableHead className="font-bold text-slate-800">
                        Amount
                      </TableHead>
                      <TableHead className="font-bold text-slate-800">
                        Transaction Status
                      </TableHead>
                    </>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentHistory.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center font-bold">
                      No {selectedHistory} history
                    </TableCell>
                  </TableRow>
                ) : (
                  currentHistory.map((item, index) => (
                    <TableRow key={index}>
                      {selectedHistory === "deposit" ? (
                        <>
                          <TableCell>{item.dateAdded}</TableCell>
                          <TableCell>{item.depositMethod}</TableCell>
                          <TableCell>
                            {"$" +
                              (typeof item.amount === "string"
                                ? parseFloat(item.amount).toLocaleString(
                                    undefined,
                                    {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    }
                                  )
                                : item.amount.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }))}
                          </TableCell>
                          <TableCell
                            className={
                              item.transactionStatus === "Pending" ||
                              item.transactionStatus === "pending"
                                ? "text-orange-500 capitalize font/-bold"
                                : item.transactionStatus === "failed" ||
                                  item.transactionStatus === "Failed"
                                ? "text-red-500 capitalize font/-bold"
                                : "text-green-500 capitalize font-/bold"
                            }
                          >
                            {item.transactionStatus === "Pending" ||
                            item.transactionStatus === "pending" ? (
                              <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {item.transactionStatus}
                              </div>
                            ) : item.transactionStatus === "failed" ||
                              item.transactionStatus === "Failed" ? (
                              <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={faCancel} />{" "}
                                {item.transactionStatus}
                              </div>
                            ) : (
                              <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={faCheckCircle} />{" "}
                                {item.transactionStatus}
                              </div>
                            )}
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell>{item.dateAdded}</TableCell>
                          <TableCell>{item.withdrawMethod}</TableCell>
                          <TableCell>
                            {"$" +
                              (typeof item.amount === "string"
                                ? parseFloat(item.amount).toLocaleString(
                                    undefined,
                                    {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    }
                                  )
                                : item.amount.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }))}
                          </TableCell>
                          <TableCell
                            className={
                              item.transactionStatus === "Pending" ||
                              item.transactionStatus === "pending"
                                ? "text-orange-500 capitalize font-/bold"
                                : item.transactionStatus === "failed" ||
                                  item.transactionStatus === "Failed"
                                ? "text-red-500 capitalize font-/bold"
                                : "text-green-500 capitalize font/-bold"
                            }
                          >
                            {item.transactionStatus === "Pending" ||
                            item.transactionStatus === "pending" ? (
                              <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {item.transactionStatus}
                              </div>
                            ) : item.transactionStatus === "failed" ||
                              item.transactionStatus === "Failed" ? (
                              <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={faCancel} />{" "}
                                {item.transactionStatus}
                              </div>
                            ) : (
                              <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={faCheckCircle} />{" "}
                                {item.transactionStatus}
                              </div>
                            )}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
}
